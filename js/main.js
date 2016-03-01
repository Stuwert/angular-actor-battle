var angular = require('angular');
var angularDragula = require('angular-dragula');

var app = angular.module('actorBattle', [angularDragula(angular), require('angular-route')]);

app.controller('ScreenController', function(){
  this.gameState = "selectScreen";
  this.gameType = "";
  this.selectChoice = "How would you like to battle today?"
  this.intro = "Welcome to Actor Battle, the game where you get to answer life-long questions like 'Could Meryl Streep take on Seth Rogan?' Just select your favorite actors/actresses, throw them in the ring, and see who wins!"
  this.player1length = null;
  this.player2length = null;

  //Controls which screen is currently viewable.
  this.currentState = function(scrn){
    return scrn === this.gameState;
  }
  //changes the viewable screen
  this.changeState = function(newState){
    if (newState !== 'endGame'){
      this.player1length = 1;
      this.player2length = 1;
    }
    this.gameState = newState;
  }
})

app.config(function($routeProvider){
  $routeProvider
    .when('/game/:gametype', {
      templateUrl: 'partials/game.html',
      controller: 'GameController'
    })
    .when('/end', {
      templateUrl: 'partials/end.html',
      controller: 'EndController'
    })
    .otherwise({
      templateUrl: 'partials/start.html',
      controller: 'ScreenController'
    })
})

app.controller('GameController', function($scope, $http, $routeParams){
  //Game object for team 1
  $scope.team1 = {
    container: [],
    length: +$routeParams.gametype.split("on")[0],
    current: true
  };
  //Game object for team 2.
  $scope.team2 = {
    container: [],
    length: +$routeParams.gametype.split("on")[2],
    current: false
  };

  console.log($scope.team1);
  //Controls which player is active.
  $scope.active1 = [];
  $scope.active2 = [];

  // General turn status and game State.
  $scope.turnStatus = "team1";
  $scope.gameState = 'teamSelect';

  $scope.returnScreen = function(){
    var obj = {
      'teamSelect' : 'partials/game/characterselect.html',
      'fighterSelect' : 'partials/game/fighterselect.html',
      'attackSelect' : 'partials/game/attackselect.html'
    }
    return obj[$scope.gameState];
  }

  $scope.showSelect = "Team 1 Select"

  this.currentState = function(scrn){
    return scrn === $scope.gameState;
  };


  this.changeState = function(newState){
    $scope.gameState = newState;
  };


  this.callTest = function(){
    $http({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/person?api_key=7fb22e55a5bafa415e02fe8d426ad2f9&query=' + $scope.actor.split(" ").join("+"),
      dataType: 'jsonp'
    }).then(function successCallback(response){
      $scope.team1.container.push(addActor(response))
      $scope.actor = null;
      // $scope.changeTurn();
    }, function errorCallback(response){

    })
  }

  $scope.returnClass = function(team){
    if ($scope[team].current){
      return team + "Show";
    }else{
      return null;
    }
  }

  $scope.changeCurrentTeam = function(num){
    if($scope["team" + num].current){
      $scope["team" + num].current = false;
      $scope.showSelect = "Please Pick a Team"
    }else{
      if (num === 1){
        $scope["team" + 2].current = false;
        $scope.showSelect = "Team 1 Select"
      }else{
        $scope["team" + 1].current = false;
        $scope.showSelect = "Team 2 Select"
      }
      $scope["team" + num].current = true;
    }
  }

  this.changeCurrentTeam = function(team){
    $scope.newClass[team] = $scope.newClass[team] === '' ? team + 'Show' : '';
  };

})


function addActor(response){
  var actor = response.data["results"][0];
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
