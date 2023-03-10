

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Blog</h1>
      <p>Check out my latest posts below.</p>
      <Link to="/posts" className="btn">View Posts</Link>
    </div>
  );
}

export default Home;
