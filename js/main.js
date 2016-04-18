var angular = require('angular')
require('angular-route')
var angularDragula = require('angular-dragula')

var app = angular.module('actorBattle', ['ngRoute', angularDragula(angular)] )

require('./services')
require('./controllers')

app
  .config(function($routeProvider){
    $routeProvider
    .when('/draft/:gameparams', {
      templateUrl: 'partials/draft.html',
      controller: 'DraftController'
    })
    .when('/fighterselect', {
      templateUrl: 'partials/fighterselect.html',
      controller: 'FighterSelectController'
    })
    .when('/end', {
      templateUrl: 'partials/end.html',
      controller: 'EndScreenController'
    })
    .otherwise({
      templateUrl: 'partials/intro.html',
      controller: 'IntroController'
    })
  })
