var React = require('react');
var ReactDOM = require('react-dom');
var root = document.getElementById('root');
Dispatcher = require('./dispatcher/Dispatcher');
note = require('./util/Note');
keyListeners = require('./util/KeyListener');
Store = require('./stores/KeyStore');
keyListeners();

// ReactDOM.render(<TodoList />, root);
