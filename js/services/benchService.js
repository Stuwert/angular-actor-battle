module.exports = function(){
  var that = this;
  this.player1Bench = [];
  var player1MaxSize = 1;
  var player1Fainted = [];
  this.player2Bench = [];
  var player2MaxSize = 1;

  this.player2BenchSize = function(size){
    player2MaxSize = size;
  }

  this.player1BenchSize = function(size){
    player1MaxSize = size;
  }

  this.player1AddToBench = function(player){
    that.player1Bench.push(player)
  }

  this.returnBenchPlayer1 = function(){
    return that.player1Bench;
  }

  this.returnAvailablePlayer1Characters = function(){
    return that.player1Bench.length;
  }

  this.characterFaintsPlayer1 = function(name){
    player1Fainted.push(returnCharacterIndexPlayer1(name), 1)
  }

  this.returnBenchPlayer2 = function(){
    return that.player2Bench;
  }

  this.player2AddToBench = function(player){
    that.player2Bench.push(player)
  }

  this.returnAvailablePlayer2Characters = function(){
    return that.player2Bench.length;
  }

  var returnCharacterIndexPlayer1 = function(name){
    var returnI = -1;
    that.player1Bench.forEach(function(actor, i){
      if (actor.name === name){
        returnI = i;
      }
    })
    return returnI;
  }

  var returnCharacterIndexPlayer2 = function(name){
    var returnI = -1;
    that.player2Bench.forEach(function(actor, i){
      if (actor.name === name){
        returnI = i;
      }
    })
    return returnI;
  }

  this.removeCharacterFromPlayer1 = function(name){
    that.player1Bench.splice(returnCharacterIndexPlayer1(name), 1)
  }

  this.removeCharacterFromPlayer2 = function(name){
    that.player2Bench.splice(returnCharacterIndexPlayer2(name), 1)
  }

  this.characterFaintsPlayer2 = function(name){
    player2Fainted.push(returnCharacterIndexPlayer2(name), 1)
  }

  this.player1BenchIsFull = function(){
    return that.player1Bench.length >= player1MaxSize
  }

  this.player2BenchIsFull = function(){
    return that.player2Bench.length >= player2MaxSize
  }

  this.returnplayer1Character = function(name){
    return that.player1Bench[returnCharacterIndexPlayer1(name)]
  }

  this.returnplayer2Character = function(name){
    return that.player2Bench[returnCharacterIndexPlayer1(name)]
  }

}
