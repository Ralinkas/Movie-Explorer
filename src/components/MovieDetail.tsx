// src/components/MovieDetail.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import './MovieDetail.css'; // Подключение стилей

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const movie = useSelector((state: RootState) =>
    state.cards.allCards.find((m) => m.id === Number(id))
  );

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-detail-container">
      <button className="back-button" onClick={() => navigate('/')}>
        Back to List
      </button>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="movie-image" />
      <h1 className="movie-title">{movie.title}</h1>
      <p className="movie-description">{movie.overview}</p>
    </div>
  );
};

export default MovieDetail;
