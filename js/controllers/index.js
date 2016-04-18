
var app = require('angular').module('actorBattle')

app
  .controller('IntroController', require('./IntroController'))
  .controller('DraftController', require('./DraftController'))
  .controller('FighterSelectController', require('./FighterSelectController'))
  .controller('EndScreenController', require('./EndScreenController'))
