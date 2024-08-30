import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardList from './components/CardList';
import MovieDetail from './components/MovieDetail';
import './App.css';

function App() {
  return (
    <Router basename="/Movie-Explorer">
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/card/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

