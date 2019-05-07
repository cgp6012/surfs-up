// client/src/App.js
import React, { Component } from "react";
// Add the following
import { fontawesome } from '@fortawesome/fontawesome'
import { solid } from '@fortawesome/fontawesome-free-solid'
import { regular } from '@fortawesome/fontawesome-free-regular'

fontawesome.library.add(solid, regular)

class App extends Component {
  render() {
    return <div>Surf's up bro</div>;
  }
}

export default App;
