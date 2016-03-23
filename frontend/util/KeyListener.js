var keyActions = require('../actions/key_actions.js');
var Mapping = {
  74: 'C4',
  75: 'CS4',
  76: 'D4'
};

var keyListeners = function() {
  $(document).keydown(function(e){
    // debugger
    keyActions.keyPressed(Mapping[e.keyCode]);
  });

  $(document).keyup(function(e){
    keyActions.keyReleased(Mapping[e.keyCode]);
  });
};

module.exports = keyListeners;
