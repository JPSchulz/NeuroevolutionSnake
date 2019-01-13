/*
  TODO:

*/

var allPlayers = [];

var allFruits = [];

var bestOneJSON;

var bestOneName;

var loadedFile;

var curEra;

var champ = {"input_nodes":13,"hidden_nodes":20,"output_nodes":4,"weights_ih":{"rows":20,"cols":13,"data":[[-1.8169856154461297,-4.885691655857568,-7.940915032515729,0.0009825320224641776,-0.11771393761963025,6.539021039404709,2.2367304537799377,-0.15129426775376972,7.4210964649195,4.7831210487970335,-2.2256201759729484,0.06141985541478666,2.3968233879386944],[2.435933060780011,-9.59370619610789,2.0145523559001286,-3.7160928410210925,-0.05076413748088813,7.463255275190545,-3.569766790712804,8.13476272126164,0.9587567740849141,11.065263441116878,-4.505440202835697,2.238094726180635,0.24566972333268106],[-6.0466172790866235,-6.0832871393281795,4.306671520069708,-13.019703280685572,-5.441891725912071,0.14919436827965438,1.4591557179583678,2.432662536330101,1.6207578609269686,2.4804634258657354,3.899464538818078,1.6681463516340946,4.764445928118356],[2.4779563397626103,10.610998754061152,-2.404608021429173,5.388805006857691,-13.168254939648465,-4.810325321784479,2.9761129310266305,-0.5427069476511382,0.9240539513057838,-1.6442121468047324,3.726167258592875,9.392105187833023,3.2855078528704267],[-0.6987787074181837,-2.072407230559933,0.5553754176196634,-2.516194056638815,-3.5622838814230002,0.6205899920208877,-1.4125287243188351,-6.08701066333567,-0.10325785851467956,5.167253063826505,-8.032985299460233,1.0969456016218266,-4.944012116142555],[0.004985731883014391,0.38664989190752774,8.077302361239294,-3.4791535517437193,-1.4353615594169602,4.7486201282902645,3.993038684714741,-4.598228282449968,3.4941806814171006,2.6445409289167303,3.9609692338082256,6.035050907827651,4.396818034487023],[-2.6791872804214694,-1.165157735558252,0.7247417176793967,-3.0328036238080913,-4.096588862363072,-2.221111645263777,-1.4495237664812977,-0.04622497288754979,3.9500051964269396,4.523328888718601,-2.742705886279266,-1.963863820420884,-6.357553249682997],[1.0200749471402228,-9.476292482716675,-7.245107135865565,-11.603558810117686,-1.5656824535429994,1.1585608148348618,-0.6840319257649121,10.25554356501116,0.6447808246542845,-0.9294044595835,2.9766759893749355,-3.948091123135192,-9.146803658547244],[-3.237135718144626,-4.151060783471516,-1.5464311784586684,3.1052260028106615,-0.09947764024945233,-2.571046174286038,-5.046121463699464,-1.6354049588022306,-2.9482653204397793,-1.258545817647147,5.1728335509057874,-4.643480542418879,-3.8084109941693374],[-4.8225108299624795,-4.328577272150563,-6.840921991440482,-0.5129276193921983,-3.3693538423385436,4.344312004495828,1.9421729849234155,0.3679475973867725,1.1222953728661975,-11.52671424303106,1.1894248355088854,4.112642021774397,4.120289140453711],[4.155910210404596,-0.29202423522960064,-10.291728305206966,-1.9507980086189938,1.7446409383226449,-6.808104333820281,4.49795606181616,-2.9469036979217478,0.14532552771952023,7.29781821806293,7.309228208125961,7.623919310836363,-3.1081558098855355],[4.376791026279897,6.730615693667296,-0.33240585634029346,0.43193335580839565,1.0771326220211646,-3.7043581013589515,-5.655118447662012,1.3147149774850884,-0.7408756107978977,6.3211631257445395,1.4089777108488257,-5.43085729608752,-6.633728885868429],[1.7865364749225379,0.24273867972943763,-10.716534174172095,-4.704041293099627,-4.25394295750639,-3.149242058370488,1.5222589188426359,6.829381453269811,0.8122170477405934,5.905276185874776,-2.994725466329587,-2.9450948267981367,-6.410364719565814],[-0.05634998605447833,3.2583437272322824,-5.118702117823108,-0.32644693248775036,-1.189460143282046,-1.5935021758975707,7.5722062641746,-1.0894853627112002,2.0333268994742344,0.07904308086635592,1.885195200588798,5.204025206110352,8.834449975696186],[0.5905255334747509,1.0553552783829956,-4.049537766661947,2.3845579420967162,-4.951961099137195,-2.805287908988237,2.9468571950981235,0.7593408278700213,7.599605404256217,7.870954993149817,-5.768281772204677,-4.79792341821848,-6.699081600312791],[-0.6983969982524092,3.1181247855671472,-1.2335267220734913,5.4517425283343215,-1.8160084313736848,-2.056124108609924,-1.146072522111624,5.274866054506826,3.060077108290508,4.180390950844131,2.734491447159724,1.1178424026220424,-1.658874623222864],[-4.864528563080122,3.97499518990888,-4.014794237870625,5.590377033186457,-3.037703995129691,-2.126502929141599,-8.29635842632889,-1.3402959627732225,4.853636177161411,7.265779814564704,-9.680637530961977,-2.486984080877307,-2.621907374499467],[-2.7463315225286813,-5.326717790578562,-4.086048560099615,5.807298800865569,-10.41221442837075,-2.8087724610750233,-9.157281993470447,6.782305331605141,-2.462547208688387,0.17253525928181523,5.639891632097817,-0.5098190477111633,-6.3841939630769495],[0.014824967929663757,3.7976399277124577,0.8733434523514692,2.560210249447396,11.848968292560535,-5.536484642894202,-11.691032499990937,-0.7290301880276285,-0.1303508071544245,-0.8041936436979065,0.6799109379002746,-5.072951923385757,-9.084173985808546],[-1.3148697676384433,-2.5484762239919814,-6.309141480041763,-0.7089239373001132,11.243511316292546,2.694655738392096,-2.927506120887401,0.8643255375364582,2.27647230094518,-9.676874319379793,1.6483931471706408,7.243108156159524,12.699761356755953]]},"weights_ho":{"rows":4,"cols":20,"data":[[5.100521909850869,-0.22688679014628965,-4.9232322888172675,7.642332925442315,-1.3723550899157884,10.126727979024551,-4.4103709690049495,-4.4940614171429765,0.38711723572543466,2.6265545893028874,0.5628123815580878,-7.81969853323448,-4.882522510385688,5.27903324807607,-4.099582603788256,-2.8689646209002913,5.843998102828821,0.2966945394035161,-13.454755245673988,10.02446494088448],[2.2852748552298903,-3.2795520790294503,-1.907815227788547,-7.311756952179295,1.544196554604182,4.425023398869957,4.1554189003717035,6.119781251872833,-0.9938175714585712,1.559394937737612,-4.872650423963196,1.5406286386706523,-2.2856982011785405,-1.0317935528695514,-4.815245950863337,-1.636628117336726,-4.927345436511404,-1.7694615346878637,7.316828744313202,8.115015791622486],[3.9131188814167395,8.17743098852448,0.03256845775584605,3.259124867285913,1.1352856279310641,-0.07061700488923064,5.941762214500017,-12.54385230560952,2.698469075357062,-3.0900566409205767,-4.706069263782558,8.504959393197577,-2.1099990577283076,-0.5728860350138182,2.25106526228295,-0.09332228796273587,7.169087091284784,-3.6518930178988227,12.16842039411603,-4.876409936234606],[2.7126813570103856,7.002931250145626,-2.018174096837876,-2.426037508398129,1.1499589547972515,-1.7115940169699215,0.861603223725246,11.91026248150743,6.546552312533071,-3.342750516184778,-2.158931553609417,1.2074426474888065,10.995102084608872,-0.7427345063988318,2.051394105287197,-1.4815464158810323,-3.8461151081756753,-3.345452661820703,-2.2498482556814308,-4.87347926835238]]},"bias_h":{"rows":20,"cols":1,"data":[[-1.2276901946863712],[-1.9318133610159944],[-1.335372381615051],[2.3431886381452722],[-3.365721206071921],[-2.0207584401974494],[-3.2744380381509064],[0.10002048529203317],[1.9582735334636399],[1.543357978176271],[2.529085902880566],[1.486105431726946],[-2.1180652710375356],[4.47672155003284],[-1.5616789394712574],[4.002210447401344],[-1.8780190458913713],[-4.944913800181108],[0.9766295218754881],[-2.883664696393652]]},"bias_o":{"rows":4,"cols":1,"data":[[2.395418345397111],[-0.5957495910668972],[-1.56056037480983],[0.39610852480967584]]},"learning_rate":0.1,"activation_function":{}}


var params = {
  population: 1000,
  inputlayers: 13,
  newSegments: 4,
  NumberOfElites: 10,
  evolve: true,
  useNeataptic: false,
  autoSave: true,
  snakeXPos:10,
  snakeYPos:10,
  snakeMovesToLive:10,
  snakeMovesPerApple:5
};

var stats ={
  highScore:0,
  maxFruits:0,
  genCount:0,
  deaths:[]
};



function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent('canvascontainer');
  speedSlider = select('#speedSlider');
  speedSpan = select('#speed');

  populationSlider = select('#populationSlider');
  populationSpan = select('#population');
  populationSlider.value(params.population);

  scoreElem = createDiv('Score = 0');
  scoreElem.position(20, 20);

  avgScoreElem = createDiv('avgScore = 0');
  avgScoreElem.position(20, 35);
  avgScoreElem.style('color', 'white');

  curGenScoreElem = createDiv('curGen Score = 0');
  curGenScoreElem.position(width - 100, 20);
  curGenScoreElem.style('color', 'white');

  genCounterElem = select('#GenerationsCounter');

  scoreElem.id = 'score';
  scoreElem.style('color', 'white');

  tableElemcgs = select('#table_cgs');
  tableElemcgm = select('#table_cgm');
  tableElemcgw = select('#table_cgw');
  tableElemts = select('#table_ts');
  tableElemtm = select('#table_tm');
  tableElemtw = select('#table_tw');
  tableElemtrs = select('#table_trs');
  tableElemtrm = select('#table_trm');
  tableElemtrw = select('#table_trw');

  chkBxAutoSave = select('#chkBxAutoSave');
  chkBxAutoSave.mousePressed(checkBoxChange);

  stats.deaths[0] = 0; //self
  stats.deaths[1] = 0; //no more moves
  stats.deaths[2] = 0; //wall
  stats.deaths[3] = 0; //curGen self
  stats.deaths[4] = 0; //curGen no more moves
  stats.deaths[5] = 0; //curGen wall


  allFruits.push(new Fruit());

  frameRate(30);
  stroke(255);
  strokeWeight(10);

  if (params.useNeataptic) {
    initNeat(params.population);
  } else {
    for (let i = 0; i < params.population; i++) {
      newSnake = new Player();
      allPlayers.push(newSnake);
    }
  }
  // Buttons mit Functions verknüpfen
  btnKillAll = select('#btnKillCurGen');
  btnKillAll.mousePressed(killAll);
  btnSaveBest = select('#btnSaveBest');
  btnSaveBest.mousePressed(saveBest);
  btnSwitchMode = select('#btnSwitchMode');
  btnSwitchMode.mousePressed(switchMode);
  btnSwitchChart = select('#btnSwitchChart');
  btnSwitchChart.mousePressed(switchChart);
  btnSwitchCanvas = select('#btnSwitchCanvas');
  btnSwitchCanvas.mousePressed(switchCanvas);
  btnAddChart = select('#btnAddChart');
  btnAddChart.mousePressed(addChart);
  btnRemoveChart = select('#btnRemoveChart');
  btnRemoveChart.mousePressed(removeChart);
  btnSaveCSV = select('#btnSaveCSV');
  btnloadChamp = select('#loadChamp');
  btnloadChamp.mousePressed(loadChamp);
  btnSaveCSV.mousePressed(saveCSV);

  ctx = document.getElementById('myChart').getContext('2d');
  initChart();
  curEra = new Era();
  
  console.log(params);
}

function draw() {
  let cycles = speedSlider.value();
  speedSpan.html(cycles);
  params.population = populationSlider.value();
  populationSpan.html(params.population);


  // How many times to advance the game
  for (let n = 0; n < cycles; n++) {
    background(0);
    for (let index = 0; index < allPlayers.length; index++) {
      if (allPlayers[index].alive) {
        allPlayers[index].think();
        allPlayers[index].update();
      }
    }
    checkGameStatus();
  }
  let mydiv = select('#canvascontainer');
  if (!mydiv.elt.hidden) {
  for (let index = 0; index < allPlayers.length; index++) {
    allPlayers[index].show();
  }
  }
}

function checkGameStatus() {
  let activePlayers = 0;
  let avgScore = 0;
  let genHighScore = 0;
  for (let index = 0; index < allPlayers.length; index++) {
    avgScore += allPlayers[index].score;
    if (allPlayers[index].score > stats.highScore) {  //new HighScore -> new bestOne -> new JSON
      stats.highScore = allPlayers[index].score;
      bestOneJSON = allPlayers[index].brain.serialize();
      bestOneName = "Player_S" + (allPlayers[index].NumberOfFruits) + "G" + stats.genCount + ".json";
    }
    if (allPlayers[index].alive) activePlayers++;
    if (allPlayers[index].NumberOfFruits> genHighScore) genHighScore = allPlayers[index].NumberOfFruits;
  }
  avgScore = avgScore / allPlayers.length;
  if (activePlayers == 0) {
    if (params.evolve) {
      curEra.addGeneration(new Generation(allPlayers, stats.deaths[3], stats.deaths[4], stats.deaths[5]));
      let mydiv = select('#myChartDiv');
      if (!mydiv.elt.hidden) {
        updateChart(curEra);
      }
      nextGeneration();
      stats.genCount++;
      if (params.autoSave && stats.genCount == 500) {
        saveCSV();
      }
    } else {
      loopCurrentGenartion();
    }
  }
  updateHTML(genHighScore, avgScore);
}


function today() {
  let date = new Date();
  let string = "";
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  if (dd < 10) dd = 0 + "" + dd;
  if (mm < 10) mm = 0 + "" + mm;
  let yyyy = date.getFullYear();
  string += "" + dd + mm + yyyy;
  return string;
}

function now() {
  let date = new Date();
  let hh = date.getHours();
  let mi = date.getMinutes();
  let string = "";
  if (hh < 10) hh = 0 + "" + hh;
  if (mi < 10) mi = 0 + "" + mi;
  string += hh + "_" + mi;
  return string;
}



function updateHTML(curGenHighScore, curGenAvgScore) {
  if (stats.maxFruits < curGenHighScore) stats.maxFruits = curGenHighScore;
  scoreElem.html("HighScore = " + stats.highScore + " (" + stats.maxFruits + ")");
  avgScoreElem.html("avgScore = " + curGenAvgScore);
  genCounterElem.html("Gen NR : " + stats.genCount);
  curGenScoreElem.html("Fruits = " + curGenHighScore);
  let total = stats.deaths[0]+stats.deaths[1]+stats.deaths[2];
  tableElemts.html(stats.deaths[0]);
  tableElemtm.html(stats.deaths[1]);
  tableElemtw.html(stats.deaths[2]);
  tableElemtrs.html(math.round(100*stats.deaths[0]/total,2) + "%");
  tableElemtrm.html(math.round(100*stats.deaths[1]/total,2) + "%");
  tableElemtrw.html(math.round(100*stats.deaths[2]/total,2) + "%");
  tableElemcgs.html(stats.deaths[3]);
  tableElemcgm.html(stats.deaths[4]);
  tableElemcgw.html(stats.deaths[5]);
}


function switchMode() {    // play the best one so far
  params.evolve = !params.evolve;
  if (params.evolve) {
    btnSwitchMode.html('Currently evolving');
  } else {
    btnSwitchMode.html('Currently looping');
  }
}

function switchChart(){
  let mydiv = select('#myChartDiv');
  if (mydiv.elt.hidden) {
    mydiv.show();
    btnSwitchChart.html('hide Chart');
  } else {
    mydiv.hide();
    btnSwitchChart.html('show Chart');
  }
  mydiv.elt.hidden = !mydiv.elt.hidden;
}

function switchCanvas(){
  let mydiv = select('#canvascontainer');
  if (mydiv.elt.hidden) {
    mydiv.show();
    btnSwitchCanvas.html('hide Game');
  } else {
    mydiv.hide();
    btnSwitchCanvas.html('show Game');
  }
  mydiv.elt.hidden = !mydiv.elt.hidden;
}




function addChart() {
  let inputField = select('#myInput');
  let label = inputField.value();
  if (Era.getDataId(label) != -1) {
    addDataSet(label, curEra);
  } else {
    console.log('Attribute not found');
  }
}

function removeChart() {
  let inputField = select('#myInput');
  let label = inputField.value();
  removeDataSet(label);
}


function killAll() {
  for (let i = 0; i < allPlayers.length; i++) {
    allPlayers[i].alive = false;
  }
}


function keyPressed() {
  dir = 0;
  switch (keyCode) {
    case 74:
      dir = 4;
      break;
    case 76:
      dir = 2;
      break;
    case 73:
      dir = 1;
      break;
    case 75:
      dir = 3;
      break;
  }
  if (dir != 0) newSnake.updateDirection(dir);
}


// FileReader Functions

function loadFile() {
  //Source: https://www.w3.org/TR/FileAPI/

  var file = document.getElementById('inputLoader').files[0];
  if (file) {
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onprogress = updateProgress;
    reader.onload = loaded;
    reader.onerror = errorHandler;
  }
}

function updateProgress(evt) {
  if (evt.lengthComputable) {
    // evt.loaded and evt.total are ProgressEvent properties
    var loaded = (evt.loaded / evt.total);
    if (loaded < 1) {
      // Increase the prog bar length
      // style.width = (loaded * 200) + "px";
    }
  }
}

function loaded(evt) {
  // Obtain the read file data
  var fileString = evt.target.result;
  //console.log(fileString);
  // let fileString2=fileString.replace(String.fromCharCode(92),"");
  // console.log(fileString2);
  let brain = NeuralNetwork.deserialize(fileString);
  createPopulationFromPlayer(brain);
}

function loadChamp(){
  let brain = NeuralNetwork.deserialize(champ);
  params.snakeMovesToLive =50;
  params.snakeMovesPerApple=30;
  createPopulationFromPlayer(brain);
}

function saveBest() {
  var blob = new Blob([bestOneJSON], {
    "type": "application/json"
  });
  var a = document.createElement("a");
  a.download = bestOneName;
  a.href = URL.createObjectURL(blob);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function saveCSV() {
  var blob = new Blob([curEra.createCSVContent()], {
    "type": "contentType"
  });
  var a = document.createElement("a");
  a.download = curEra.getCSVName();
  a.href = URL.createObjectURL(blob);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function checkBoxChange() {
  params.autoSave = !params.autoSave;
}

function createPopulationFromPlayer(brain) {
  if (brain instanceof NeuralNetwork) {
    allPlayers = [];
    for (let i = 0; i < params.population; i++) {
      allPlayers.push(new Player(brain));
    }
    params.evolve = false;
    btnSwitchMode.html('Currently looping');
  }
}

function errorHandler(evt) {
  if (evt.target.error.name == "NotReadableError") {
    // The file could not be read
  }
}
