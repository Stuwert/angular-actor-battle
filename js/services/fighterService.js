module.exports = function(){
  this.player1Fighter;
  this.player2Fighter;
  this.player1Attack;
  this.player2Attack;
  this.numberOfFights = 0;
  this.winningPlayer;
  
  var that = this;

  this.setPlayer1Fighter = function(char){
    this.player1Fighter = char;
  }
  this.setPlayer2Fighter = function(char){
    this.player2Fighter = char;
  }

  this.readyToFight = function(){
    return that.player1Attack !== null && that.player2Attack !== null;
  }

  this.fight = function(){
    that.numberOfFights++;
    return fightLoop(that.player1Fighter, that.player1Attack, that.player2Fighter, that.player2Attack);
  }


  //fxn to check if there are two fighters
  // add player1 attack info
  // add fight calculation
  // returns an object with winning player and losing player
}

// want to add $scope.$emit(myCustomEvent) - for button fire

function fightLoop(character1, character1Attack, character2, character2Attack){


  if(isAlive(character1) && isAlive(character2)){
    return fightLoop(character1, character1Attack, character2, character2Attack);
  }else{
    return {
      winner: "",
      loser: ""
    }
  }
}

function isAlive(){

}

// function fightLoop(character1, character2){
//   player1attacktotal++;
//   player2attacktotal++;
//   turnNum++;
//   var char1pop = attackstatus["player1"].popularity/attackstatus["player2"].popularity;
//   var char2pop = 1/char1pop;
//   calculateHealth(character1, damageDealt(damageMultiplier(attackstatus["player2"].attack, char2pop), character1.armor));
//   calculateHealth(character2, damageDealt(damageMultiplier(attackstatus["player1"].attack, char1pop), character1.armor));
//   // printScreen(character1, character2Damage, character2, character1Damage);
//   var winner = fightWinner(character1, character2);
//   if (!winner){
//     fightLoop(character1, character2);
//   }
// }
