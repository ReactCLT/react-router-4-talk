import React from 'react';
import { BrowserRouter, Match, Miss, Link } from 'react-router'
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
    </div>
  </BrowserRouter>
);

export default App;
