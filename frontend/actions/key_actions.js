var Dispatcher = require('../dispatcher/Dispatcher');
var TONES = require('../constants/Tones');

var KeyActions = {
  keyPressed: function(key){
    var action = {
      actionType: "keyPressed",
      note: key

    };
    Dispatcher.dispatch(action);
  },

  keyReleased: function(key){
    var action = {
      actionType: "keyReleased",
      note: key
    };
    Dispatcher.dispatch(action);
  }
};
 module.exports = KeyActions;
