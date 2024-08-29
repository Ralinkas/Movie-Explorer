// src/store/cardsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardType } from './types';

interface CardsState {
  allCards: CardType[];
  showLiked: boolean;
}

const initialState: CardsState = {
  allCards: [],
  showLiked: false,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addMovies(state, action: PayloadAction<CardType[]>) {
      state.allCards = action.payload;
    },
    deleteMovie(state, action: PayloadAction<number>) {
      state.allCards = state.allCards.filter(card => card.id !== action.payload);
    },
    toggleLike(state, action: PayloadAction<number>) {
      const card = state.allCards.find(card => card.id === action.payload);
      if (card) {
        card.liked = !card.liked;
      }
    },
    toggleFilter(state) {
      state.showLiked = !state.showLiked;
    },
  },
});

export const { addMovies, deleteMovie, toggleLike, toggleFilter } = cardsSlice.actions;

export default cardsSlice.reducer;
