function diceGameSimulation(numOfSimulations) {
  let totalSimulations=[];
  for (let i = 0; i < numOfSimulations; i++) {
    let dice1=Math.floor(Math.random()*6)+1;
    let dice2=Math.floor(Math.random()*6)+1;
    let sum=dice1+dice2;
    let result;
    if (sum===7 || sum===11) {
      result='win';
    } else if (sum===2 || sum===3 || sum===12) {
      result='lose';
    } else {
      result='roll again';
    }
    let simulation={dice1, dice2, sum, result};
    totalSimulations.push(simulation);
  }
  return totalSimulations;
}

module.exports = diceGameSimulation;
