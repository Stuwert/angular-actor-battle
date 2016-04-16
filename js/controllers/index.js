
var app = require('angular').module('actorBattle')

app
  .controller('IntroController', require('./IntroController'))
  .controller('DraftController', require('./DraftController'))
  .controller('FighterSelectController', require('./FighterSelectController'))
  .controller('MoveSelectController', require('./MoveSelectController'))
  .controller('EndScreenController', require('./EndScreenController'))
  .controller('BenchController', require('./BenchController'))
