import { newChar } from "../util/string";

function DNA(targetLength = 0) {
  this.genes = [];
  this.fitness = 0;

  for (let i = 0; i < targetLength; i++) {
    this.genes[i] = newChar();
  }
}

DNA.prototype.phenotype = function () {
  return this.genes.join("");
};

DNA.prototype.checkFit = function (target) {
  let fitScore = 0;
  for (let i = 0; i < target.length; i++) {
    if (this.genes[i] === target[i]) fitScore++;
  }
  this.fitness = Math.pow(fitScore / target.length, 3);

  return this.fitness;
};

DNA.prototype.crossover = function (partner) {
  const idx = Math.floor(Math.random() * this.genes.length);
  const child = new DNA(this.genes.length);
  for (let i = 0; i < this.genes.length; i++) {
    if (i > idx) child.genes[i] = this.genes[i];
    else child.genes[i] = partner.genes[i];
  }

  return child;
};

DNA.prototype.mutation = function(mutRate) {
  for (let i = 0; i < this.genes.length; i++) {
    if (Math.random() < mutRate) this.genes[i] = newChar();
  }
}

export default DNA;
