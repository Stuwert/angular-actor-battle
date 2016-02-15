var angular = require('angular');
var $ = require('jquery')
var angularDragula = require('angular-dragula');


var app = angular.module('actorBattle', [angularDragula(angular)]);

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
  this.player1 = {};
  this.payer2 = {};
})
