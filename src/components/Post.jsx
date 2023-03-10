// Posts.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Post.css';

function Post() {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState('');
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://dummyjson.com/docs/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  const handleInput = event => {
    setPostId(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios.get(`https://dummyjson.com/docs/posts/${postId}`)
      .then(response => {
        setPost(response.data);
        setError(null);
      })
      .catch(error => {
        setPost(null);
        setError(error);
      });
  };

  return (
    <div className="posts">
      <h1>My Latest Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <h2>Fetch a Single Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Post ID:
          <input type="text" value={postId} onChange={handleInput} />
        </label>
        <button type="submit">Fetch Post</button>
      </form>
      {post && (
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      )}
      {error && <p>{error.message}</p>}
    </div>
  );
}

export default Post;
