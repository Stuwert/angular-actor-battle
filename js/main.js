var angular = require('angular');
var $ = require('jquery')
var angularDragula = require('angular-dragula');
var tmdb = require('./jsoncall');


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

app.controller('GameController', function($scope){
  $scope.team1 = [];
  $scope.team2 = [];
  $scope.active1 = [];
  $scope.active2 = [];
  $scope.turnStatus = "team1";
  $scope.gameState = 'teamSelect';

  this.currentState = function(scrn){
    return scrn === $scope.gameState;
  };

  var changeTurn = function(){
    if (this.turnStatus === "team1"){
      $scope.turnStatus = 'team2'
      $scope.newClass.team1 = ''
      $scope.newClass.team2 = 'team2Show'
    }else{
      $scope.turnStatus = 'team1'
      $scope.newClass.team2 = ''
      $scope.newClass.team1 = 'team1Show'
    }
  };

  this.changeState = function(newState){
    $scope.gameState = newState;
  };


  this.callTest = function(){
      $scope.team1.push({'name' : 'Bing Bong'})
      console.log($scope.team1);
    // tmdb.call('/search/person', {query : $('#actor').val()}).then(function(response){
    //   $scope.team1.push(success(response));
    //   console.log($scope.team1);
    //   changeTurn();
    // }, function(error){
    //   alert('Please try again')
    // })
  };

  $scope.newClass = {
    "team1" : 'team1Show',
    "team2" : ''
  };

  this.showHideTeam = function(team){
    $scope.newClass[team] = $scope.newClass[team] === '' ? team + 'Show' : '';
  };

})


function success(response){
  var actor = response["results"][0];
  var movie0 = actor["known_for"][0];
  var movie1 = actor["known_for"][1]
  var actorArmor = 0;
  actor["known_for"].forEach(function(item){
    actorArmor += item["vote_average"];
  })
  return new newFighter(actor.name, actorArmor, actor.popularity, actor["profile_path"], movie0["poster_path"], movie1["poster_path"], movie0["popularity"], movie1["popularity"]);
};

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
