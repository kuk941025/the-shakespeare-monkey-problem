import DNA from "./DNA";

function Population({ mutRate, maxPop, target }) {
  this.populations = [];
  this.maxFitness = 0;
  this.matingPool = [];
  this.mutRate = mutRate;
  this.totalPop = maxPop;
  this.bestDNA = "";
  this.generations = 0;
  this.target = target;
  this.completed = false;

  for (let i = 0; i < this.totalPop; i++)
    this.populations.push(new DNA(target.length));
  
}

Population.prototype.calcMaxFitness = function () {
  for (let i = 0; i < this.totalPop; i++) {
    if (this.populations[i].checkFit(this.target) > this.maxFitness) {
      this.maxFitness = this.populations[i].checkFit(this.target);
      this.bestDNA = this.populations[i].phenotype();
    }
  }

  return this.maxFitness;
}

Population.prototype.naturalSelection = function () {
  this.matingPool = [];
  this.calcMaxFitness();
  for (let i = 0; i < this.populations.length; i++) {
    if (Math.random() < this.populations[i].fitness) this.matingPool.push(this.populations[i]);
  }
}

Population.prototype.generateGens = function() {
  for (let i = 0; i < this.populations.length; i++){
    const idxA = Math.floor(Math.random() * this.matingPool.length);
    const idxB = Math.floor(Math.random() * this.matingPool.length);
    const dnaA = this.matingPool[idxA];
    const dnaB = this.matingPool[idxB];


    const child = dnaA.crossover(dnaB);
    child.mutation(this.mutRate);
    this.populations[i] = child;
  }

  this.generations += 1;

  if (this.bestDNA === this.target) {
    this.completed = true;
  }
}

Population.prototype.printAll = function () {
  for (let i = 0; i < 50; i++) {
    console.log(this.populations[i].phenotype());
  }
}
export default Population;
