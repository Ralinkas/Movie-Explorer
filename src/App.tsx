// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardList from './components/CardList';
import MovieDetail from './components/MovieDetail'; // Импорт нового компонента
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardList />} />
        <Route path="/card/:id" element={<MovieDetail />} /> {/* Обновлённый маршрут */}
      </Routes>
    </Router>
  );
}

export default App;
