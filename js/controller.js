var app = angular.module('actorBattle', []);

app.controller('ScreenController', function(){
  this.gameState = "selectScreen";

  this.currentState = function(scrn){
    return scrn === this.gameState;
  }
})
