module.exports = function($scope, dragulaService, benchService, fighterService, $location){

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
      var fightResult = fighterService.fight();
      if(fightResult){
        if(fightResult.loser === 'player1'){
          benchService.characterFaintsPlayer1(fighterService.player1Fighter.name)
          benchService.setPlayer2Health(fighterService.player2Fighter)
          // set player 2 health
        }else{
          console.log(fighterService.player1Fighter.health);
          benchService.characterFaintsPlayer2(fighterService.player2Fighter.name)
          benchService.setPlayer1Health(fighterService.player1Fighter)
          //set player 1 health
        }
        var elToRemove = angular.element(document.querySelector('#' + fightResult.loser))
        elToRemove.empty();
      }else{
        angular.element(document.querySelector('#player1')).empty()
        angular.element(document.querySelector('#player2')).empty()
      }
      if(benchService.player1Bench.length === 0 || benchService.player2Bench.length === 0  ){
        $location.path('/end')
      }
    }
  }

}
