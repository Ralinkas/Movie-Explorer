// src/components/CardList.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Card from './Card';
import './CardList.css'; 
import { addMovies, toggleLike, deleteMovie, toggleFilter } from '../store/cardsSlice';
import { fetchMovies } from '../api';

const CardList: React.FC = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state: RootState) => state.cards.allCards);
  const showLiked = useSelector((state: RootState) => state.cards.showLiked);

  useEffect(() => {
    const loadMovies = async () => {
      const movies = await fetchMovies();
      dispatch(addMovies(movies));
    };
    loadMovies();
  }, [dispatch]);

  const handleLikeToggle = (id: number) => {
    dispatch(toggleLike(id));
  };

  const handleDelete = (id: number) => {
    dispatch(deleteMovie(id));
  };

  const handleFilterToggle = () => {
    dispatch(toggleFilter());
  };

  const displayedCards = showLiked ? cards.filter(card => card.liked) : cards;

  return (
    <div>
      <h1 className="card-list-title">Movie List</h1>
      <button className="filter-button" onClick={handleFilterToggle}>
        {showLiked ? 'Show All' : 'Show Liked'}
      </button>
      <div className="card-list-container">
        {displayedCards.map(card => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            image={`https://image.tmdb.org/t/p/w500${card.poster_path}`}
            // Удаляем описание из пропсов
            liked={card.liked}
            onLikeToggle={handleLikeToggle}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
