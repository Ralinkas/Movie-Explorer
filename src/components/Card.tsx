// src/components/Card.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Card.css';

interface CardProps {
  id: number;
  title: string;
  image: string;
  description?: string; // Сделайте описание необязательным
  liked: boolean;
  onLikeToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ id, title, image, description, liked, onLikeToggle, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/card/${id}`)}>
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        {/* Отображаем описание только если оно передано */}
        {description && <p className="card-description">{description}</p>}
      </div>
      <div className="card-actions">
        <FontAwesomeIcon
          icon={liked ? solidHeart : regularHeart}
          onClick={(e) => {
            e.stopPropagation(); // Предотвращает выполнение onClick карточки
            onLikeToggle(id);
          }}
          className={`like-icon ${liked ? 'liked' : ''}`}
        />
        <FontAwesomeIcon
          icon={faTrashAlt}
          onClick={(e) => {
            e.stopPropagation(); // Предотвращает выполнение onClick карточки
            onDelete(id);
          }}
          className="delete-icon"
        />
      </div>
    </div>
  );
};

export default Card;
