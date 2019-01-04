/*
TODO:
  - add meta data / more data to csv export
*/


class Generation {
  constructor(playerlist, deathsSelf, deathsMoves, deathsWall) {
    let scores = [];
    let fruits = [];
    let frames = [];
    let moves = [];

    this.vals = [];

    for (let i = 0; i < playerlist.length; i++) {
      scores.push(playerlist[i].score);
      fruits.push(playerlist[i].NumberOfFruits);
      frames.push(playerlist[i].counter);
      moves.push(playerlist[i].moveCount);
    }
    /*
    x cor:
      0 -> score
      1 -> fruit
      2 -> frame
      3 -> move
    y cor:
      0 -> best
      1 -> worst
      2 -> mean
      3 -> median
      4 -> std standard deviation
      5 -> var variance
      6 -> first Quartile
      7 -> third Quartile
    */

    for (let x = 0; x < 4; x++) {
      let array = [];
      switch (x) {
        case 0: array = scores;
          break;
        case 1: array = fruits;
          break;
        case 2: array = frames;
          break;
        case 3: array = moves;
          break;
      }
      let row = [];

      row.push(math.max(array));                 // 0
      row.push(math.min(array));                 // 1
      row.push(math.mean(array));                // 2
      row.push(math.median(array));              // 3
      row.push(math.std(array));                 // 4
      row.push(math.var(array));                 // 5
      row.push(math.quantileSeq(array, 0.75));   // 6
      row.push(math.quantileSeq(array, 0.25));   // 7

      this.vals.push(row);
    }
    let row = [];
    row.push(deathsSelf);
    row.push(deathsMoves);
    row.push(deathsWall);
    this.vals.push(row);
  }
}

class Era {
  constructor() {
    this.allGenerations = [];
  }

  addGeneration(gen) {
    this.allGenerations.push(gen);
  }

  getDataSet(coordinates) {
    let x = coordinates.x;
    let y = coordinates.y;

    if (x == -1 || y == -1) {
      console.log("Attribute not Found!");
      return;
    }
    let dataSet = [];
    this.allGenerations.forEach(element => {
      dataSet.push(element.vals[x][y]);
    });
    return dataSet;
  }



  static getDataId(AttributeName) {
    AttributeName = AttributeName.toLowerCase().replace(/\s/g, "");
    let x = -1;
    let y = -1;
    if (AttributeName.includes("score")) x = 0;

    if (AttributeName.includes("fruit")) x = 1;

    if (AttributeName.includes("frame")) x = 2;

    if (AttributeName.includes("move")) x = 3;

    if (AttributeName.includes("death")) x = 4;


    if (AttributeName.includes("best") || AttributeName.includes("most") || AttributeName.includes("self")) {
      y = 0;
    }
    if (AttributeName.includes("worst") || AttributeName.includes("fewest") || AttributeName.includes("starve")) {
      y = 1;
    }
    if (AttributeName.includes("mean") || AttributeName.includes("wall")) {
      y = 2;
    }
    if (AttributeName.includes("median")) {
      y = 3;
    }
    if (AttributeName.includes("deviation") || AttributeName.includes("abweichung") || AttributeName.includes("std")) {
      y = 4;
    }
    if (AttributeName.includes("variance") || AttributeName.includes("varianz")) {
      y = 5;
    }
    if (AttributeName.includes("up")) {
      y = 6;
    }
    if (AttributeName.includes("low")) {
      y = 7;
    }

    return { x: x, y: y };
  }




  createCSVContent() {
    let content = "Generation,BestScore,WorstScore,MeanScore,MedianScore,stdScore,varScore,firstQuartileScore,thidQuartileScore,";
    content += "BestFruit,WorstFruit,MeanFruit,MedianFruit,stdFruit,varFruit,firstQuartileFruit,thidQuartileFruit,";
    content += "BestFrame,WorstFrame,MeanFrame,MedianFrame,stdFrame,varFrame,firstQuartileFrame,thidQuartileFrame,";
    content += "BestMove,WorstMove,MeanMove,MedianMove,stdMove,varMove,firstQuartileMove,thidQuartileMove,";
    content += "DeathSelf,DeathStarved,DeathWall \r\n";
    


    for (let i = 0; i < this.allGenerations.length; i++) {
      content +=i +",";
      let CurGen = this.allGenerations[i];
      for(let x = 0; x< CurGen.vals.length;x++){
        let row = CurGen.vals[x];
        for (let y=0;y<row.length;y++ ){
          let attribute = row[y];
          if(x==CurGen.vals.length-1 && y == row.length-1){
            content += attribute + "\r\n";
          }else{
            content += attribute +",";
          }
        }
      }
    }
    return content;
  }

  getCSVName() {
    return "ERA_" + today() + "@" + now() + "GNR" + this.allGenerations.length + ".CSV";
  }
}
