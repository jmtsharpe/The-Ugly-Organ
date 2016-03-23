var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/Dispatcher');
// var EventEmitter = require('events').EventEmitter;
var TONES = require('../constants/Tones');
var KeyStore = new Store(Dispatcher);

var _keys = {};
var _callbacks = [];


KeyStore.all = function() {
  var keys = [];
  for (var name in _keys){
    if (_keys.hasOwnProperty(name)){
      keys.push(_keys[name]);
    }
  }
  return keys;
};


KeyStore.find = function() {
  return _keys[name];
};

KeyStore.addNote = function (note) {
  _keys[note] = TONES[note];
  // debugger
};

KeyStore.removeNote = function (note) {
  delete _keys[note];
  // debugger;
};


KeyStore.__onDispatch = function (payload) {
  // debugger
  var noteName = payload.note;
  switch(payload.actionType) {
  case "keyPressed":
    KeyStore.addNote(noteName);
    // debugger
    // console.log(_keys);
    KeyStore.__emitChange();
    break;
  case "keyReleased":
    KeyStore.removeNote(noteName);
    KeyStore.__emitChange();
    break;
  }
};
module.exports = KeyStore;
