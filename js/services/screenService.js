module.exports = function($location){
  this.gameState = $location.$$path.split("/")[1]
}
