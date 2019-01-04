// Daniel Shiffman
// Nature of Code: Intelligence and Learning
// https://github.com/shiffman/NOC-S17-2-Intelligence-Learning

// This flappy bird implementation is adapted from:
// https://youtu.be/cXgA1d_E-jY&


// This file includes functions for creating a new generation
// of birds.

// Start the game over


function resetGame() {
  // Resetting best bird score to 0
  allFruits = [];
  allFruits.push(new Fruit());
  stats.deaths[3] = 0;
  stats.deaths[4] = 0;
  stats.deaths[5] = 0;

}

function loopCurrentGenartion() {
  resetGame();
  newPlayers = [];
  for (let i = 0; i < params.population; i++) {
    index = i % allPlayers.length;
    newPlayers.push(new Player(allPlayers[index].brain));
  }
  allPlayers = newPlayers.slice();
}


// Create the next generation
function nextGeneration() {

  resetGame();

  if (params.useNeataptic) {
    neat.evolve();
    allPlayers = [];
    for (let i = 0; i < neat.population.length; i++) {
      allPlayers.push(new Player(neat.population[i]));
    }
  }
  else {
    // Normalize the fitness values 0-1
    normalizeFitness(allPlayers);
    // Generate a new set of birds
    activePlayers = generate(allPlayers, params.NumberOfElites);
    // Copy those birds to another array
    allPlayers = activePlayers.slice();
  }
}

// Generate a new population of birds
function generate(oldPlayers, elitismSize) {
  let newPlayers = [];
  if (elitismSize == null || elitismSize < 0) {
    elitismSize = 0;
  }
  else {
    newPlayers =selectElite(oldPlayers,elitismSize);
  }

  for (let i = elitismSize; i < params.population; i++) {
    let p1 = poolSelection(oldPlayers);
    let p2 = poolSelection(oldPlayers);
    // Select a bird based on fitness
    let player = p1.crossover(p2);
    // let player = poolSelection(oldPlayers);
    player.mutate();
    newPlayers.push(player);
  }
  return newPlayers;
}

// Normalize the fitness of all birds
function normalizeFitness(players) {
  // Make score exponentially better?
  for (let i = 0; i < players.length; i++) {
    players[i].score = pow(players[i].score, 2);
  }

  // Add up all the scores
  let sum = 0;
  for (let i = 0; i < players.length; i++) {
    sum += players[i].score;
  }
  // Divide by the sum
  for (let i = 0; i < players.length; i++) {
    players[i].fitness = players[i].score / sum;
  }
}

function selectElite(Players,SizeOfElite) {
  let sortedPlayers = Players;
  sortedPlayers = sortedPlayers.sort(compare);
  let elite = [];
  let i = 0;
  while (i < SizeOfElite) {
    elite.push(sortedPlayers[i].copy());
    i++;
  }
  return elite;
}


function compare(a, b) {
  if (a.fitness > b.fitness) return -1;
  if (b.fitness > a.fitness) return 1;
  return 0;
}


// An algorithm for picking one bird from an array
// based on fitness
function poolSelection(players) {
  // Start at 0
  let index = 0;


  // Pick a random number between 0 and 1
  let r = random(1);

  // Keep subtracting probabilities until you get less than zero
  // Higher probabilities will be more likely to be fixed since they will
  // subtract a larger number towards zero
  while (r > 0) {
    r -= players[index].fitness;
    // And move on to the next
    index += 1;
  }

  // Go back one
  index -= 1;

  // Make sure it's a copy!
  let newPlayer = players[index].copy();
  return newPlayer;
}



function initNeat(populationsize) {
  var neuronet = new neataptic.architect.Random(params.inputlayers, 12, 4);
  neat = new neataptic.Neat(params.inputlayers, 4, getFitness, {
    mutation: neataptic.methods.mutation.ALL,
    popsize: populationsize,
    elitism: 10,
    fitnessPopulation: true,
    network: neuronet
  });
  for (let i = 0; i < neat.population.length; i++) {
    allPlayers.push(new Player(neat.population[i]));
  }
  return neat;
}

function getFitness(brains) {
  //normalizeFitness(allPlayers);
  for (let i = 0; i < brains.length; i++) {
    brains[i].score = allPlayers[i].score;
  }
}
