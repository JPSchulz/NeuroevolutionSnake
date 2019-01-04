var ctx;
var myChart;
var DataSetLabels = ["BestFruits"];
var DataSetIds = [{x: 1, y: 0}];
var myColors=[];


var config = {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: "BestFruits",
            data: [],
            fill: false,
            borderColor: "rgb(0,255,0)"
        }]
    }
};

function initChart() {
    myChart = new Chart(ctx, config);
}

function addDataSet(label, era) {
    let id = Era.getDataId(label);
    let data = era.getDataSet(id);
    if (!DataSetLabels.includes(label) && !DataSetIds.includes(Era.getDataId(label))) {
        config.data.datasets.push({ label: label, data: data, fill: false, borderColor: newColor()});
        DataSetLabels.push(label);
        DataSetIds.push(id);
        myChart.update();
    }
}



function updateChart(era) {
    updateAllSets(era);
}

function newColor(){
    let r=floor(random(255));
    let g=floor(random(255));
    let b=floor(random(255));
    return "rgb("+r+","+g+"," +b+")";
}


function removeDataSet(label) {
    let found = false;
    if(config.data.datasets.length>1){
    for (let i = 0; i < config.data.datasets.length; i++) {
        if (config.data.datasets[i].label == label && !found) {
            config.data.datasets.splice(i, 1);
            DataSetIds.splice(i, 1);
            DataSetLabels.splice(i, 1);
            found = !found;
        }
    }
    if (found) {
        myChart.update();
    } else {
        console.log('Chart not found');
    }
}else{
    console.log("can't delete the only Chart, hide it instead!");
}
}

function updateAllSets(era) {
    let curId = 0;
    for (let i = 0; i < DataSetIds.length; i++) {
        curLabel = DataSetLabels[i];
        curId = DataSetIds[i];
        updateDataSet(curLabel, era.getDataSet(curId));
    }
    updateDataLabels();
}



function updateDataSet(label, vals) {
    for (let i = 0; i < config.data.datasets.length; i++) {
        if (config.data.datasets[i].label == label) {
            if (config.data.datasets[i].data.length < vals.length) {
                for (let j = config.data.datasets[i].data.length; j < vals.length; j++) {
                    config.data.datasets[i].data.push(vals[j]);
                }
            }
        }
    }
}

function updateDataLabels() {
    let labelsLength = config.data.labels.length;
    let longestDataset = config.data.datasets[0].data.length;
    if (config.data.datasets.length > 1) {
        for (let i = 1; i < config.data.datasets.length; i++) {
            if (config.data.datasets[i].data.length > longestDataset) longestDataset = config.data.datasets[i].data.length;
        }
    }
    while (labelsLength < longestDataset) {
        config.data.labels.push(config.data.labels.length + 1);
        labelsLength++;
    }
    myChart.update();
}
