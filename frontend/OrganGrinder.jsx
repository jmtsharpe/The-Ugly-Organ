var React = require('react');
var ReactDOM = require('react-dom');
var root = document.getElementById('root');
Dispatcher = require('./dispatcher/Dispatcher');
note = require('./util/Note');
keyListeners = require('./util/KeyListener');
Store = require('./stores/KeyStore');
Key = require('./components/Key');
keyListeners();

$(document).ready(function (e) {
  ReactDOM.render(
    <Key noteName="D4" />,
    $("#content")[0]
  );  });
