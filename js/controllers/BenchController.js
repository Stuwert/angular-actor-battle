module.exports = function($scope, benchService, activeService, screenService, dragulaService){

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
