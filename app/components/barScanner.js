import React, { Component } from 'react';
import {Html5QrcodeScanner} from 'html5-qrcode'; // Make sure to provide the correct path to Html5QrcodePlugin

// interface AppState {
//   // Define state properties here if needed
// }

class App extends React.Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback.
    this.onNewScanResult = this.onNewScanResult.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Html5Qrcode React example!</h1>
        <Html5QrcodeScanner
          fps={10}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback={this.onNewScanResult}
        />
      </div>);
  }

  onNewScanResult(decodedText, decodedResult) {
    // Handle the result here.
  }
}

export default App;
