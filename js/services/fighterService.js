module.exports = function(){
  this.player1Fighter;
  this.player2Fighter;
  this.player1Attack;
  this.player2Attack;
  this.numberOfFights = 0;
  this.winningPlayer;
  this.readyToFight = false;

  var that = this;

  this.setPlayer1Fighter = function(char){
    this.player1Fighter = char[0];
    that.checkReady();
  }
  this.setPlayer2Fighter = function(char){
    this.player2Fighter = char[0];
    that.checkReady();
  }

  this.checkReady = function(){
    if (that.player1Fighter !== undefined && that.player2Fighter !== undefined){
      that.readyToFight = true;
    }
  }


  this.fight = function(){
    that.numberOfFights++;
    return fightLoop(that.player1Fighter, that.player2Fighter);
  }


  //fxn to check if there are two fighters
  // add player1 attack info
  // add fight calculation
  // returns an object with winning player and losing player
}

// want to add $scope.$emit(myCustomEvent) - for button fire

function isAlive(){

}

function fightLoop(character1, character2){
  var character1attack = character1.attack1.attack + character1.attack2.attack
  var character2attack = character2.attack1.attack + character2.attack2.attack
  var char1pop = character1.popularity/character2.popularity;
  var char2pop = 1/char1pop;
  character1.health = calculateHealth(character1, damageDealt(damageMultiplier(character2attack, char2pop), character1.armor));
  character2.health = calculateHealth(character2, damageDealt(damageMultiplier(character1attack, char1pop), character2.armor));
  if(character1.health <= 0 || character2.health <= 0){
    if(character1.health <= 0 && character2.health <= 0){
      return null
    }else if(character1.health <= 0){
      return {
        winner: "player2",
        loser: "player1"
      }
    }else{
      return {
        winner: "player1",
        loser: "player2"
      }
    }
  }else{
    return fightLoop(character1, character2)
  }
}

function damageDealt(attack, armor){
  if (armor > attack){
    return 1
  }else{
    return +((attack - armor).toFixed(0));
  }
};

function damageMultiplier(attack, multiplier){
  multiplier = multiplier > 1 ? multiplier/2 : multiplier * 2;
 var randomizer = getRandom(multiplier);
 return attack * randomizer;
};

function calculateHealth(char, attackDamage){
  return char.health - attackDamage
};

function getRandom(avg){
  var min = avg - 1;
  var max = avg + 1;
  return Math.random() * (max - min) + min;
}

function fightWinner(character1, character2){
  var winningchar;
  var losingchar;
  if (character1.status === "fainted" && character2.status === "fainted"){
    removePlayer("player1")
    removePlayer("player2")
    winningchar =  "No One";
  }else if (character1.status === "fainted"){
    removePlayer("player1")
    player2score++;
    winningchar = character2.name;
    losingchar = character1.name;
  }else if (character2.status === "fainted"){
    removePlayer("player2");
    player1score++;
    winningchar = character1.name;
    losingchar = character2.name;
  }else{
    winningchar = false;
  }
  if(winningchar !== false){
    printWinningInfo(winningchar, losingchar);
    resetCheck();
  }
  hideFightButton();
  checkForWinner();
  fightToSelect();
  return winningchar;
}
