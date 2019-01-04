
function mutate(x) {
  if (random(1) < 0.10) {
    let offset = randomGaussian() * 0.5;
    let newx = x + offset;
    return newx;
  } else {
    return x;
  }
}


class Player extends Snake {

  constructor(brain) {
    super();


    if (params.useNeataptic) {
      this.brain = brain;
    } else {
      if (brain instanceof NeuralNetwork) {
        this.brain = brain.copy();
      } else {
        this.brain = new NeuralNetwork(params.inputlayers, 20, 4);
      }
    }

  }

  setBrain(brain) { this.brain = brain; }

  think() {

    // Now create the inputs to the neural network
    let inputs = [];

    inputs = this.lookAround();

    // Get the outputs from the network
    let action = [];
    if (params.useNeataptic) {
      action = this.brain.activate(inputs);
    } else {
      action = this.brain.predict(inputs);
    }
    let newDirection;

    //interprete Outputs
    if (action[3] > action[2] && action[3] > action[1] && action[3] > action[0]) {
      newDirection = 1;
    }
    if (action[2] > action[3] && action[2] > action[1] && action[2] > action[0]) {
      newDirection = 2;
    }
    if (action[1] > action[2] && action[1] > action[3] && action[1] > action[0]) {
      newDirection = 3;
    }
    if (action[0] > action[2] && action[0] > action[1] && action[0] > action[3]) {
      newDirection = 4;
    }

    this.updateDirection(newDirection);

  }

  copy() {
    return new Player(this.brain);
  }

  crossover(partner){
    let newBrain = this.brain.crossover(partner.brain);
    return new Player(newBrain);
  }

  mutate(){
    this.brain.mutate(mutate);
  }

  getInputLength(){
    return this.lookAround2().length;
  }


}
