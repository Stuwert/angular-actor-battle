module.exports = function(){

  var that = this;

  this.activePlayer = "player1"
  //could also be player2 or null


  this.changeActivePlayer = function(player){
    if(that.activePlayer === player){
      that.activePlayer = null;
    }else{
      that.activePlayer = player;
    }
    console.log(that.activePlayer);
  }

  this.returnClass = function(player){
    return that.activePlayer === player ? player + "Show" : null;
  }
}
