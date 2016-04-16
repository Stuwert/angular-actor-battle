module.exports = function($scope, dragulaService, benchService, fighterService){

  dragulaService.options($scope, 'bag-one', {
      copy: true
    });

  dragulaService.options($scope, 'bag-two', {
      copy: true
    });

  $scope.$on('bag-one.drop', function(e, el){
    fighterService.setPlayer1Fighter(benchService.returnBenchPlayer1(el[0].childNodes[1].innerHTML));
    console.log(fighterService.player1Fighter);
  })
  $scope.$on('bag-two.drop', function(e, el){
    fighterService.setPlayer2Fighter(benchService.returnBenchPlayer2(el[0].childNodes[1].innerHTML));
    console.log(fighterService.player2Fighter);
  })
}
