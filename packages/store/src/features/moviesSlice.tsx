import React from 'react';
import { PayloadAction, configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

interface MoviesSliceState {
  movies: Movie[];
}

const initialState: MoviesSliceState = {
  movies: []
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<Movie>) => {
      state.movies = [...state.movies, action.payload];
    },
    deleteMovie: (state, action: PayloadAction<number>) => {
      state.movies = state.movies.filter(mov => mov.id !== action.payload);
    }
  }
});

export const { addMovie, deleteMovie } = moviesSlice.actions;
export type MoviesSlice = ReturnType<typeof moviesSlice.reducer>;
