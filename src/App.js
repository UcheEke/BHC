import React, { Component } from 'react';
import Navbar from './components/navbar';
import AboutUs from './components/aboutUs';
import Footer from './components/footer';
import Landing from './components/landing';
import History from './components/history';
import PrivateHire from './components/privateHire';
import Contact from './components/contact';
import UpcomingEvents from './components/upcomingEvents';
import Services from './components/services';
import Data from './components/data';
import './css/App.css';

let data = Data;

/*
 <Landing sgreet={data.special_greeting}/>
 <AboutUs/>
 <History />
 <PrivateHire/>
 <UpcomingEvents events={data.events} speakers={data.speakers}/>
 <Services services={data.services} speakers={data.speakers}/>
 <Contact/>
 */


class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
          <div className="container">
              <PrivateHire/>
          </div>
          <Footer />
      </div>
    );
  }
}

export default App;
