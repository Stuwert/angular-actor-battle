module.exports = function($http){
  this.findActor = function(actoress){
    return $http({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/person?api_key=7fb22e55a5bafa415e02fe8d426ad2f9&query=' + actoress.split(" ").join("+"),
      dataType: 'jsonp'
    })
  }
}
