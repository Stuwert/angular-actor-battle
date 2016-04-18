module.exports = function($scope, activeService, benchService, httpService, dragulaService, screenService, $routeParams){

  var player1Bench = +$routeParams.gameparams.split("on")[0]
  var player2Bench = +$routeParams.gameparams.split("on")[1]

  benchService.setPlayer2BenchSize(player2Bench)
  benchService.setPlayer1BenchSize(player1Bench)

  $scope.findActoress = function(){
    httpService.findActor($scope.actoress).then(function successCallback(response){
      benchService[activeService.activePlayer + "AddToBench"](packageActoress(response))
      $scope.actoress = ""
    }, function errorCallback(response){
      alert('Bing Bong')
    })
  }

  $scope.bothBenchesFull = function(){
    return benchService.player1BenchIsFull() && benchService.player2BenchIsFull();
  }

  $scope.currentTeamFull = function(){
    return benchService[activeService.activePlayer + "BenchIsFull"]();
  }

  $scope.currentTeam = activeService.activePlayer;

  $scope.returnClass = activeService.returnClass;

  $scope.player1Bench = benchService.player1Bench;
  $scope.player2Bench = benchService.player2Bench;

  $scope.changeCurrentPlayer = activeService.changeActivePlayer;

  $scope.$on('bag-one.cancel', function(e, el){
    if(screenService.gameState === "draft" && confirm("Would you like to delete this element?")){
      benchService.removeCharacterFromPlayer1(el[0].childNodes[1].innerHTML)
      $scope.$apply();
    }

  })
  $scope.$on('bag-two.cancel', function(e, el){
    if(screenService.gameState === "draft" && confirm("Would you like to delete this element?")){
      benchService.removeCharacterFromPlayer2(el[0].childNodes[1].innerHTML)
      $scope.$apply();
    }

  })



}


function packageActoress(response){
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
