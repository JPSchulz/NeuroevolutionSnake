/*
  TODO:
    - work on fitness / target function
    - maybe add some more inputs (input diagonal view)
    - change input mapping
    - !test 3 vs 4 outputs!
*/



class Snake {
  constructor() {
    this.xCor = [];
    this.yCor = [];
    this.moveCount = 0;
    this.xFruit = 0;
    this.yFruit = 0;
    this.xStart = params.snakeXPos;
    this.yStart = params.snakeYPos;
    this.diff = 10;
    this.fitness = 0;
    this.score = 0;
    this.counter = 0;
    this.direction = 2;    // clockwise starting with up =1 ending with left = 4
    this.numSegments = 10;
    this.alive = true;
    this.movesToLive = params.snakeMovesToLive;
    this.movesPerApple = params.snakeMovesPerApple;
    this.distanceToApple = height;
    this.NumberOfFruits = 0;
    this.SegmentsLeft = 0;
    this.lastState = 0;


    for (var i = 0; i < this.numSegments; i++) {
      this.xCor.push(this.xStart + (i * this.diff));
      this.yCor.push(this.yStart);
    }
    //this.updateFruitCoordinates();
    this.newFruit(allFruits);
  }

  show() {
    if (this.alive) {
      let start ={x: this.xCor[0], y : this.yCor[0]};
      let end ={x:0, y:0};
      for (var i = 1; i < this.numSegments - 1; i++) {
        if(this.xCor[i]==start.x){
          while(this.xCor[i+1]==start.x && i+1<this.numSegments-1){
            i++;
          }
          end.x=this.xCor[i];
          end.y=this.yCor[i];
        } else{
          if(this.yCor[i]==start.y){
            while(this.yCor[i+1]==start.y && i+1<this.numSegments-1){
              i++;
            }
            end.x=this.xCor[i];
            end.y=this.yCor[i];
          }
        }
        stroke(255, 50);
        line(start.x,start.y,end.x,end.y);
        start.x=end.x;
        start.y=end.y;
      }
    }
  }

  isAlive() { return this.alive; }

  update() {
    this.updateSnakeCoordinates();
    if (this.xCor[this.xCor.length - 1] > width ||
      this.xCor[this.xCor.length - 1] < 0 ||
      this.yCor[this.yCor.length - 1] > height ||
      this.yCor[this.yCor.length - 1] < 0
    ) {
      this.alive = false;
      stats.deaths[2]++;
      stats.deaths[5]++;
      this.score = this.calcScore();
    }
    if (this.moveCount > this.movesToLive) {
      this.alive = false;
      stats.deaths[1]++;
      stats.deaths[4]++;
      this.score = this.calcScore();
    }
    if (this.checkSnakeCollision()) {
      this.alive = false;
      stats.deaths[0]++;
      stats.deaths[3]++;
      this.score = this.calcScore();
    }
    this.checkForFruit();
    this.grow();
    this.counter++;
  }

  calcScore() {
    /*
      try to implement a state and manipulate score based on last state -> current state
      e.g. snake headding towards a wall (state:gonnaDie) -> snake makes smart turn (state:aintGonnaDie) -> score goes up
    */


    let minDistObstacle = Infinity;
    let obsDists = this.lookAround();
    let newScore = 0;
    for (let i = 0; i < 8; i++) {
      if (obsDists[i] < minDistObstacle) minDistObstacle = obsDists[i];
    }
    //newScore = 10*(this.numSegments - 10) + this.counter / 500 -this.moveCount;
    //newScore = ((this.numSegments - 10) *10)+ this.counter / 1000 + minDistObstacle / 10 -this.moveCount;
    //newScore=(this.numSegments - 10) + this.counter / 100 + minDistObstacle/10 - this.moveCount/25;
    //newScore=(this.numSegments - 9) * this.counter / 100  -this.moveCount/10;
    newScore = pow(this.NumberOfFruits - this.moveCount / 25, 1);
    if (newScore < 0) newScore = 0;
    return newScore;
  }

  getState() {
    /*  
    0-> all good
    1-> death is close
    2-> death is certain  
    */
   let state =0;
   let movesleft = this.movesToLive- this.moveCount;
   

  }


  getScore() {
    return this.score;
  }

  kill() {
    this.alive = false;
  }

  /*
 The segments are updated based on the direction of the snake.
 All segments from 0 to n-1 are just copied over to 1 till n, i.e. segment 0
 gets the value of segment 1, segment 1 gets the value of segment 2, and so on,
 and this results in the movement of the snake.

 The last segment is added based on the direction in which the snake is going,
 if it's going left or right, the last segment's x coordinate is increased by a
 predefined value 'diff' than its second to last segment. And if it's going up
 or down, the segment's y coordinate is affected.
*/
  updateSnakeCoordinates() {

    for (var i = 0; i < this.numSegments - 1; i++) {
      this.xCor[i] = this.xCor[i + 1];
      this.yCor[i] = this.yCor[i + 1];
    }
    switch (this.direction) {
      case 2:
        this.xCor[this.numSegments - 1] = this.xCor[this.numSegments - 2] + this.diff;
        this.yCor[this.numSegments - 1] = this.yCor[this.numSegments - 2];
        break;
      case 1:
        this.xCor[this.numSegments - 1] = this.xCor[this.numSegments - 2];
        this.yCor[this.numSegments - 1] = this.yCor[this.numSegments - 2] - this.diff;
        break;
      case 4:
        this.xCor[this.numSegments - 1] = this.xCor[this.numSegments - 2] - this.diff;
        this.yCor[this.numSegments - 1] = this.yCor[this.numSegments - 2];
        break;
      case 3:
        this.xCor[this.numSegments - 1] = this.xCor[this.numSegments - 2];
        this.yCor[this.numSegments - 1] = this.yCor[this.numSegments - 2] + this.diff;
        break;
    }
  }



  checkSnakeCollision() {
    var snakeHeadX = this.xCor[this.xCor.length - 1];
    var snakeHeadY = this.yCor[this.yCor.length - 1];
    for (var i = 0; i < this.xCor.length - 1; i++) {
      if (this.xCor[i] === snakeHeadX && this.yCor[i] === snakeHeadY) {
        return true;
      }
    }
  }

  /*
   Whenever the snake consumes a fruit, I increment the number of segments,
   and just insert the tail segment again at the start of the array (basically
   I add the last segment again at the tail, thereby extending the tail)
  */
  checkForFruit() {
    stroke(255, 0, 0, 200);
    point(this.xFruit, this.yFruit);
    this.distanceToApple = dist(this.xFruit, this.yFruit, this.xCor[this.xCor.length - 1], this.yCor[this.yCor.length - 1]);
    if (this.xCor[this.xCor.length - 1] === this.xFruit && this.yCor[this.yCor.length - 1] === this.yFruit) {
      this.NumberOfFruits++;
      this.SegmentsLeft += params.newSegments;
      if (stats.maxFruits >= allFruits.length - 1) allFruits.push(new Fruit());
      this.newFruit(allFruits);
      this.movesToLive += this.movesPerApple + floor(this.NumberOfFruits/2);
    }
  }

  grow() {
    if (this.SegmentsLeft > 0) {
      this.xCor.unshift(this.xCor[0]);
      this.yCor.unshift(this.yCor[0]);
      this.numSegments++;
      this.SegmentsLeft--;
    }
  }

  updateDirection(dir) {
    if (dir != this.direction) {
      if (abs(this.direction - dir) == 2) {
        this.direction = (dir % 4) + 1;
      } else {
        this.direction = dir;
      }
      this.moveCount++;
    }
    // if (dir != this.direction) {
    //   this.direction = dir;
    //   this.moveCount++;
    // }
  }


  lookAround2() {
    let distances = [];
    let SHX = this.xCor[this.xCor.length - 1];    //SnakeHeadX
    let SHY = this.yCor[this.yCor.length - 1];    //SnakeHeadY
    let FX = this.xFruit;
    let FY = this.yFruit;
    let val = 0;
    let shortEdge = 0;
    let diag = dist(0, 0, width, height);

    //look for walls
    //look up
    val = map(SHY, 0, height, 0, 1);
    distances.push(val);
    //look upright
    shortEdge = math.min([SHY, width - SHX]);
    val = map(dist(SHX, SHY, SHX + shortEdge, SHY - shortEdge), 0, diag, 0, 1);
    distances.push(val);
    //look right
    val = map(width - SHX, 0, width, 0, 1);
    distances.push(val);
    //look downright
    shortEdge = math.min([height - SHY, width - SHX]);
    val = map(dist(SHX, SHY, SHX + shortEdge, SHY + shortEdge), 0, diag, 0, 1);
    distances.push(val);
    //look down
    val = map(height - SHY, 0, height, 0, 1);
    distances.push(val);
    //look downleft
    shortEdge = math.min([height - SHY, SHX]);
    val = map(dist(SHX, SHY, SHX - shortEdge, SHY + shortEdge), 0, diag, 0, 1);
    distances.push(val);
    //look left
    val = map(SHX, 0, width, 0, 1);
    distances.push(val);
    //look upleft
    shortEdge = math.min([SHY, SHX]);
    val = map(dist(SHX, SHY, SHX - shortEdge, SHY - shortEdge), 0, diag, 0, 1);
    distances.push(val);

    //look for SnakeParts
    let inputs = [];
    inputs.length = 8;
    inputs.fill(diag);

    for (let i = 0; i < this.numSegments; i++) {
      if (this.xCor[i] == SHX) {   //up&down
        if (SHY > this.yCor[i] && SHY - this.yCor[i] < inputs[0]) inputs[0] = SHY - this.yCor[i];  //up
        if (SHY < this.yCor[i] && this.yCor[i] - SHY < inputs[4]) inputs[4] = this.yCor[i] - SHY;  //down
      }
      if (this.yCor[i] == SHY) {   //left&right
        if (SHX > this.xCor[i] && SHX - this.xCor[i] < inputs[6]) inputs[6] = SHX - this.xCor[i];  //left
        if (SHX < this.xCor[i] && this.xCor[i] - SHX < inputs[2]) inputs[2] = this.xCor[i] - SHX;  //right
      }
      if (this.xCor[i] - SHX == SHY - this.yCor[i] && SHY - this.yCor[i] < inputs[1]) inputs[1] = dist(SHX, SHY, this.xCor[i], this.yCor[i]); //upright
      if (this.xCor[i] - SHX == this.yCor[i] - SHY && this.yCor[i] - SHY < inputs[3]) inputs[3] = dist(SHX, SHY, this.xCor[i], this.yCor[i]); //downright
      if (SHX - this.xCor[i] == this.yCor[i] - SHY && this.yCor[i] - SHY < inputs[5]) inputs[5] = dist(SHX, SHY, this.xCor[i], this.yCor[i]); //downleft
      if (SHX - this.xCor[i] == SHY - this.yCor[i] && SHY - this.yCor[i] < inputs[7]) inputs[7] = dist(SHX, SHY, this.xCor[i], this.yCor[i]); //upleft
    }
    for (let i = 0; i < 8; i++) {
      if (i % 2 == 0) {
        val = map(inputs[i], 0, height, 0, 1);
      } else {
        val = map(inputs[i], 0, diag, 0, 1);
      }
      distances.push(val);
    }

    //look for fruits
    //if fruit visible (in that direction) return distance to fruit else return -1
    inputs = [];
    inputs.length = 8;
    inputs.fill(-1);

    //look up & down
    if (SHX == FX) {
      if (SHY > FY) {
        inputs[0] = SHY - FY;
      } else {
        inputs[4] = FY - SHY;
      }
    }
    //look left & right
    if (SHY == FY) {
      if (SHX > FX) {
        inputs[6] = SHX - FX;
      } else {
        inputs[2] = FX - SHX;
      }
    }
    let xdist = SHX - FX;
    let ydist = SHY - FY;
    if (abs(xdist) == abs(ydist)) {
      if (xdist == ydist) {
        if (xdist < 0) { // up left
          inputs[7] = dist(SHX, SHY, FX, FY);
        } else {  // down right
          inputs[5] = dist(SHX, SHY, FX, FY);
        }
      } else {
        if (xdist < 0) {  //down left
          inputs[3] = dist(SHX, SHY, FX, FY);
        } else { // up right
          inputs[1] = dist(SHX, SHY, FX, FY);
        }
      }
    }
    for (let i = 0; i < 8; i++) {
      if (inputs[i] != -1) {
        if (i % 2 == 0) {
          val = map(inputs[i], 0, height, 0, 1);
        } else {
          val = map(inputs[i], 0, diag, 0, 1);
        }
      } else { val = inputs[i]; }
      distances.push(val);
    }

    return distances;
  }


  lookAround() {
    let Distances = []
    let snakeHeadX = this.xCor[this.xCor.length - 1];
    let snakeHeadY = this.yCor[this.yCor.length - 1];
    //look for obstacles
    //look up
    Distances[0] = snakeHeadY;
    for (let i = 0; i < this.xCor.length - 1; i++) {
      if (this.xCor[i] == snakeHeadX && this.yCor[i] < snakeHeadY && snakeHeadY - this.yCor[i] < Distances[0]) Distances[0] = snakeHeadY - this.yCor[i];
    }
    Distances[1] = snakeHeadY;
    //look right
    Distances[2] = width - snakeHeadX;
    for (let i = 0; i < this.yCor.length - 1; i++) {
      if (this.yCor[i] == snakeHeadY && this.xCor[i] > snakeHeadX && this.xCor - snakeHeadX[i] < Distances[2]) Distances[2] = this.xCor[i] - snakeHeadX;
    }
    Distances[3] = width - snakeHeadX;
    //look down
    Distances[4] = height - snakeHeadY;
    for (let i = 0; i < this.xCor.length - 1; i++) {
      if (this.xCor[i] == snakeHeadX && this.yCor[i] > snakeHeadY && this.yCor[i] - snakeHeadY < Distances[4]) Distances[4] = this.yCor[i] - snakeHeadY;
    }
    Distances[5] = height - snakeHeadY;
    //look left
    Distances[6] = snakeHeadX;
    for (let i = 0; i < this.yCor.length - 1; i++) {
      if (this.yCor[i] == snakeHeadY && this.xCor[i] < snakeHeadX && snakeHeadX - this.xCor[i] < Distances[6]) Distances[6] = snakeHeadX - this.xCor[i];
    }
    Distances[7] = snakeHeadX;
    //look for fruit
    //look up
    if (snakeHeadX == this.xFruit && this.yFruit < snakeHeadY) { Distances[8] = snakeHeadY - this.yFruit; } else Distances[8] = -1;
    //look right
    if (snakeHeadY == this.yFruit && this.xFruit > snakeHeadX) { Distances[9] = this.xFruit - snakeHeadX; } else Distances[9] = -1;
    //look down
    if (snakeHeadX == this.xFruit && this.yFruit > snakeHeadY) { Distances[10] = this.yFruit - snakeHeadY; } else Distances[10] = -1;
    //look left
    if (snakeHeadY == this.yFruit && this.xFruit < snakeHeadX) { Distances[11] = snakeHeadX - this.xFruit; } else Distances[11] = -1;

    //distance to fruit
    //Distances[12]=dist(snakeHeadX,snakeHeadY,this.xFruit,this.yFruit);

    // Distances[8]=abs(snakeHeadX-this.xFruit);
    // Distances[9]=abs(snakeHeadY-this.yFruit);
    // Distances[12]=abs(snakeHeadX-this.xFruit);
    // Distances[13]=abs(snakeHeadY-this.yFruit);

    if (true) {
      for (let i = 0; i < 12; i++) {
        if (Distances[i] != -1) {
          Distances[i] = map(Distances[i], 0, height, 0, 1);    //height = width da Sketch quadratisch
        }
      }

    }
    Distances.push(map(this.direction, 1, 4, 0, 1));
    return Distances;
  }

  newFruit(fruits) {
    this.xFruit = fruits[this.NumberOfFruits].getX();
    this.yFruit = fruits[this.NumberOfFruits].getY();
  }
}