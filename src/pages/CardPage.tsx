// src/pages/CardPage.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const CardPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const card = useSelector((state: RootState) =>
    state.cards.allCards.find((card) => card.id === Number(id))
  );

  if (!card) {
    return <p>Card not found</p>;
  }

  return (
    <div>
      <h1>{card.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${card.poster_path}`} alt={card.title} />
      <p>{card.overview}</p>
      <button onClick={() => navigate('/')}>Back to list</button>
    </div>
  );
};

export default CardPage;
