var React = require('react');
var KeyStore = require("../stores/KeyStore.js");
var KeyListener = require("../util/KeyListener");
var Note = require("../util/Note");
var TONES = require('../constants/Tones');
var Dispatcher = require("../dispatcher/Dispatcher");


var Key = React.createClass({
  getInitialState: function (){
    return {notes: []};
  },
  componentDidMount: function() {

    this.note = new Note(TONES[this.props.noteName]);
    this.keyStoreToken = KeyStore.addListener(this.setStatefromStore);
  },


  setStatefromStore: function () {
    // this.setState({ keys: keyStore.all()} );
    if (KeyStore.includes(this.props.noteName)) {
      this.note.start();
    }else{
      this.note.stop();
    }
  },

  componentWillUnmount: function() {
    this.note.stop();
    this.keyStoreToken.remove();
  },

  render: function (){
    // debugger
    return(
      <div>
        {this.props.noteName}
      </div>
    );
  }
});
module.exports = Key;
