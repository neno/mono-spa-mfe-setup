import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import {
  Movie,
  addMovie,
  deleteMovie,
  moviesSlice
} from './features/moviesSlice';
import { Provider, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export function useStore() {
  const movies = useSelector((state: any) => state.movies.movies);
  const dispatch = useDispatch();
  return {
    movies,
    addMovie: (movie: Movie) => dispatch(addMovie(movie)),
    deleteMovie: (id: number) => dispatch(deleteMovie(id))
  };
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
