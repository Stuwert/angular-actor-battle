var app = require('angular').module('actorBattle')

app
  .service('httpService', require('./httpService'))
  .service('benchService', require('./benchService'))
  .service('activeService', require('./activeService'))
  .service('screenService', require('./screenService'))
  .service('fighterService', require('./fighterService'))
