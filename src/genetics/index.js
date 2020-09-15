import Population from "./Population";

export default function genetic(setting) {
  this.population = new Population(setting);
}
genetic.prototype.run = function (bestFlag = false) {
  this.population.naturalSelection();
  this.population.generateGens();

  if (bestFlag) console.log(this.getGens(), this.getBestDNA());
  return this.population.completed;
};

genetic.prototype.getGens = function () {
  return this.population.generations;
};

genetic.prototype.getBestDNA = function () {
  return this.population.bestDNA;
};

genetic.prototype.getWords = function (num = 50) {
  return this.population.populations
    .slice(0, num)
    .map((pop) => pop.phenotype());
};
