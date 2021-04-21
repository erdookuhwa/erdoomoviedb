import React from 'react';
import './App.css';
import ReactDOM from 'react-dom'
import SearchMovies from './SearchMovies'

function App() {

  return (
    <div className="container">
      <h1 className="title">Welcome to Movie Search App!</h1>
      <SearchMovies />
    </div>
  );
}

export default App;
