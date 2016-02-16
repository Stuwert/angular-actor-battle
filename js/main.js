var angular = require('angular');
var $ = require('jquery')
var angularDragula = require('angular-dragula');


var app = angular.module('actorBattle', [angularDragula(angular)]);

app.controller('ScreenController', function(){
  this.gameState = "selectScreen";
  this.gameType = "";
  this.selectChoice = "How would you like to battle today?"
  this.intro = "Welcome to Actor Battle, the game where you get to answer life-long questions like 'Could Meryl Streep take on Seth Rogan?' Just select your favorite actors/actresses, throw them in the ring, and see who wins!"

  this.currentState = function(scrn){
    return scrn === this.gameState;
  }
  this.changeState = function(newState){
    this.gameState = newState;
  }
})

app.controller('GameController', function(){
  this.team1 = [];
  this.team2 = [];
  this.turnStatus = "team1"
  this.gameState = 'teamSelect';
  this.currentState = function(scrn){
    return scrn === this.gameState;
  }


  this.changeState = function(newState){
    this.gameState = newState;
  }
  this.newClass = {
    "team1" : '',
    "team2" : ''
  }
  this.showHideTeam = function(team){
    this.newClass[team] = this.newClass[team] === '' ? team + 'Show' : '';
  }

})

function newFighter(name, armor, actorpopularity, actorimage, image1, image2, attack1, attack2){
  this.name = name;
  this.armor = armor > 50 ? armor / 3 : armor * 1.5;
  this.popularity = actorpopularity;
  this.status = "active";
  this.health = 500;
  this.img = "http://image.tmdb.org/t/p/w185" + actorimage;
  this.attack1 = {popularity: attack1 * 10, attack: attack1 * actorpopularity * 3, img: "http://image.tmdb.org/t/p/w185" + image1}
  this.attack2 = {popularity: attack2 * 10, attack: attack2 * actorpopularity * 3, img: "http://image.tmdb.org/t/p/w185" + image2};
}

function thisIsATest(){
  return "Bing Bong"
}
