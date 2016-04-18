module.exports = function($scope, benchService){

  if(benchService.player1Bench.length === 0 && benchService.player2Bench.length === 0){

  }else if(benchService.player1Bench.length === 0){
    $scope.title = "Player 2 Wins"
    $scope.winningTeam = benchService.player2Bench;
  }else{
    $scope.title = "Player 1 Wins"
    $scope.winningTeam = benchService.player1Bench;
  }

}
