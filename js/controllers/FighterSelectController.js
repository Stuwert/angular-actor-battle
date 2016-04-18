module.exports = function($scope, dragulaService, benchService, fighterService, $rootScope){

  dragulaService.options($scope, 'bag-one', {
      copy: true
    });

  dragulaService.options($scope, 'bag-two', {
      copy: true
    });

  $scope.$on('bag-one.drop', function(e, el, target){
    if (target){
      fighterService.setPlayer1Fighter(benchService.returnBenchPlayer1(el[0].childNodes[1].innerHTML));
    }
  })
  $scope.$on('bag-two.drop', function(e, el, target){
    if(target){
      fighterService.setPlayer2Fighter(benchService.returnBenchPlayer2(el[0].childNodes[1].innerHTML));
    }
  })


  $scope.startFight = function(){
    if(fighterService.readyToFight){
      alert('bing bong');
    }
  }

}
