import React, { Component } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Landing from './components/landing';

class App extends Component {
  render() {
    return (
      <div>
          <Navbar />
          <Landing sgreet="Hello from all at Barnes Healing Church"/>
          <Footer />
      </div>
    );
  }
}

export default App;
