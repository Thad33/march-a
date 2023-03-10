import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Posts from './components/Post';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/posts">Posts</Link></li>
          </ul>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/posts" component={Posts} />
      </div>
    </Router>
  );
}

export default App;
