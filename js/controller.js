var app = angular.module('actorBattle', []);

app.controller('ScreenController', function(){
  this.gameState = "selectScreen";
  this.gameType = "";

  this.currentState = function(scrn){
    return scrn === this.gameState;
  }
  this.changeState = function(newState){
    this.gameState = newState;
    console.log(this.gameState);
  }
})

app.controller('GameController', function(){
  
})