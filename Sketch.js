/*
  TODO:

*/

var allPlayers = [];

var allFruits = [];

var bestOneJSON;

var bestOneName;

var loadedFile;

var curEra;

var champ = {"input_nodes":13,"hidden_nodes":20,"output_nodes":4,"weights_ih":{"rows":20,"cols":13,"data":[[4.613862400392838,0.9447078603834564,-2.6272042702537632,0.8825906900638324,-2.931793131147479,0.9533500062066473,4.638309464866929,-2.3867385797313005,5.999474068250947,-0.3831616319639436,-2.703208209886662,0.87823137706241,-5.287011939027209],[-5.099766678318561,-1.2410733775713814,-0.6481198553811942,-0.9713470538534055,2.214882537019899,-3.461426655394379,-3.3299820715103787,0.030436180230166324,3.4082679375713267,-14.050279249037366,-0.3760183531246477,-4.91209818142202,5.055506318432852],[7.325156311469512,-5.573830125473509,5.2216758431282635,4.653450243984969,3.1403998318484465,-2.7602101521171725,-5.8323467924905525,-8.514785049941581,-2.1999653314518253,2.1919883660673767,1.4164516838986514,-3.975864481354835,-3.2930554371898464],[0.9889101872658026,-4.40040481503459,-0.20690424754280196,-4.851387801209268,12.403278023642338,6.644406341341673,-1.8013459077081442,-3.724790590370314,0.1154217344203993,-0.9284340188565327,2.3283897549644745,-12.684605366142456,-9.178559983269391],[-4.715887334659694,0.17699481348977472,2.3517498140514226,4.146630039790493,-0.6319309985191879,3.8981737515808446,10.733904891704256,5.1217693011144085,-1.733114033098913,4.222320472801003,-7.407250342020679,7.145160713632461,-3.0781974737226894],[-2.5539265378634184,3.584825519439947,-3.0914862952092266,1.2872048584267952,-7.118902772955568,-1.1057295991413933,-5.1254150622889,-1.9323281782228214,-0.6603560641650306,-13.71016974409889,3.3257336137878197,-0.2750870233725791,1.6475503213049056],[1.5783446369600895,-2.937424629564958,1.4816377783433696,0.6447487816701286,-7.7796164380934485,-1.6321533311216905,8.324466362457013,-2.2180389847288247,1.886842156217204,2.0769584770514142,0.011551232429561353,0.0806568584866201,1.9179159159198425],[0.7318001129572697,2.858914963514313,0.9621326799442363,-2.415295137965639,-11.595471897462028,3.5207316673763476,3.0968662568658827,-8.117116235068092,-2.6765758560810617,6.273719262893153,-9.273816570065422,-3.059807097179007,3.8868474898691385],[-1.8718980038302226,-4.429740609495488,-3.3259458069049286,-7.352951582529377,0.45669287951516413,-2.2569766607194985,3.3845152369358673,4.544233603400873,-0.07776696566132002,-3.7924558983954353,0.007269099875554769,4.070134278310437,4.165508557220027],[-2.7296882050350844,-2.434848724132821,5.670254897104584,-0.0472418461933827,-0.8889135312327532,2.5910586952202737,-8.6939585017401,-7.466535253271079,-3.855861677608467,2.9018789732739805,0.3378924983073177,-7.024718689654794,-9.187164285706558],[-4.130890377615448,-1.0246925942788048,1.5143658802262552,-0.9000628650591656,-0.4761576109192471,1.9392664445929584,5.0639903299604105,3.5007415348216204,-5.451709565972112,2.587349886612263,-5.937186380292331,-0.08467789422212105,8.219002907261041],[5.9189415872075735,-3.8263486997188347,3.1152977059735014,8.331495223370915,0.1341840421085796,0.927664885322344,-9.369889182084792,-0.0443920463631684,2.2772235582840312,-5.906737586687875,5.560701307761457,1.046856818328882,-9.078214813759628],[3.11685624933008,-11.889846769714607,-6.642188800155098,0.7495535454925064,6.309744337786279,1.7474360776076632,-0.05325472762213654,-4.9488275700343625,-5.544854209328893,-2.0420582506588207,4.662022724077149,6.715987239833232,-0.7852654970683957],[5.694453641062055,-0.05048296812923969,1.785498669431171,1.2209773688758658,-26.97825210058943,-6.1644644163460764,0.8788126795390243,-0.08577818908829674,-0.5971591326543813,-3.1394117175003915,-0.7305007449252713,5.590712750163627,-2.790615402981005],[-7.354711692874537,1.4542708852008444,2.946143161293886,-0.1254048300839442,-2.370505459652678,3.015035622129562,4.577887170286915,-2.051170649170344,3.4153774716763383,5.227209320270029,1.3173970316577415,2.485299526956617,1.6434873734306705],[0.45695807686760126,0.18280763648381382,7.206214423843573,-7.464430774815057,6.326043171032481,3.4296783927402688,4.8320354060196005,7.4138136236636205,-5.6860940006588745,10.122878829530517,5.360998040537939,6.300416130732726,3.1923945070982307],[-3.832835538335232,1.9466268725503073,-0.5477193590156453,-4.6533990555581095,16.984575305891678,-4.334081092309293,-3.405966937821222,0.978598043932512,3.2379926260785528,-4.721810558362257,-0.41020153246002033,-3.969608850736796,-6.9641352261826945],[-6.6176947885808595,3.421481611707038,-2.9086310707216274,0.07345049523327789,-0.2171806453991637,2.100387902266614,-3.3467479807610596,2.338200839965771,-1.6323537042136844,6.12674966675486,-3.01846549798965,5.745297524278032,1.860310979263919],[-10.334497479075305,3.321883883745458,-11.221586104129717,-1.933495102697642,4.018328737673255,0.34380763880320286,9.538135774221008,7.767867689507697,-0.22672048593247696,-3.4233657029999254,-0.6957562062400707,-1.243002212281823,7.97181287610396],[2.5721606895945666,0.4041153626716469,-4.804815066175101,-9.300860573393889,5.035615864660952,-6.14737700752343,5.649893369780547,-1.3344061946291095,-3.4870243446507954,-5.181788966435046,2.304683238036656,5.541869202900456,7.942925296457094]]},"weights_ho":{"rows":4,"cols":20,"data":[[-1.4048940995875572,2.2530318349310723,-5.857521868948127,-13.906396783232932,1.7214041194232557,4.282770373981937,1.9338884004604704,-0.1050803057895485,4.156997967070161,-4.540267578698691,-2.011858899051971,-3.4029293849662468,2.689201150270381,12.59018167586283,0.16751799479556428,3.1970535926681842,-3.954196185996843,0.32894043988658483,1.5119235001726021,5.8231468138743105],[-3.6803038800878007,-0.8034558599252306,-7.70972306478123,2.712773098714748,-1.994244347727096,2.227049730749986,-4.608695462813545,-2.769663103596294,7.978176938845566,-4.621249568821773,-1.5190674430477666,-0.6893918958140811,2.371504358277057,-6.305522821128425,0.3655216304846239,2.871765276521955,8.974769034847373,-5.300096828462352,0.6474697007447254,6.17544798235769],[-6.196617119019725,-2.215944013595956,3.6443889462029415,7.1905074927751755,1.8250337531242522,-10.557175725025846,-4.72577280037032,7.27336484397208,-5.33212492607538,4.151644139168825,2.7902555683198504,4.271015618193065,-3.2703164311321276,-5.035794400973773,8.685254853838233,2.0090279783789087,3.0657334157504907,2.288886529836958,1.8500694161664695,-1.0191122234559054],[-3.6829699161364964,10.344351444715096,1.074810779828295,-1.2032102546667391,-0.39125387933922007,4.102103123076048,-4.779585431557622,-0.5527159309289557,-0.5827881144267343,1.4244791736375078,1.8743739771116992,5.248895751836237,-0.13670891573798732,1.4603250294020693,1.3592238205935918,1.1693044374972181,-9.280861841968115,-4.968952960002087,-18.37494685750779,-0.3282936968262216]]},"bias_h":{"rows":20,"cols":1,"data":[[-2.4112115087093344],[-0.6948080811961089],[5.133819241883342],[1.8157921028054058],[-2.5957701654514977],[2.2340385164158336],[1.6434596798767904],[2.349779714604431],[-0.8069039446854261],[3.6883995815318142],[4.716197980917826],[-0.5788040026036874],[1.5972453049531246],[3.3415278069398866],[3.8861259205600542],[-2.79614601451657],[0.7656685350889727],[3.390540070345118],[3.1965124440504877],[0.08509476060452184]]},"bias_o":{"rows":4,"cols":1,"data":[[2.3389038634473454],[-3.543273355473891],[-1.562179465657915],[3.6298075944026182]]},"learning_rate":0.1,"activation_function":{}};


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
  snakeMovesToLive:5,
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
  for (let index = 0; index < allPlayers.length; index++) {
    allPlayers[index].show();
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
