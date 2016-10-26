import React from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router'
import Home from './pages/Home';
import Event from './pages/Event';
import Events from './pages/Events';
import Unknown from './pages/Unknown';
import logo from './static/logo.svg';
import './styles/App.css';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to the React Meetup</h2>
      </div>
      <ul className="App-nav">
        <li className="App-nav-item"><Link to="/">Home</Link></li>
        <li className="App-nav-item"><Link to="/events">Events</Link></li>
      </ul>

      <hr/>

      <Match exactly pattern="/" component={Home} />
      <Match pattern="/events" component={Events} />
      <Match pattern="/event/:eventId" component={Event} />
      <Miss component={Unknown}/>

    </div>
  </BrowserRouter>
);

export default App;
