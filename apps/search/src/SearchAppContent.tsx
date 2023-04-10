import { useStore } from '@myorg/store';
import {
  SearchForm,
  MyComponent,
  ImageCard,
  Gallery,
  PrimaryButton,
  IconPlus
} from '@myorg/ui';
import { useState } from 'react';

const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=00f3f32198696caff437631c007a7548`;

export function SearchAppContent() {
  const [searchResults, setSearchResults] = useState([]);
  const { addMovie } = useStore();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const q = e.currentTarget.searchTerm.value;
    if (q) {
      const url = `${apiUrl}&query=${q}`;
      const res = await fetch(url);
      const data = await res.json();
      setSearchResults(data.results);
      console.log(data);
    } else {
      setSearchResults([]);
    }
  }

  return (
    <>
      <h1>Search App</h1>
      <SearchForm handleSubmit={handleSubmit} />
      <Gallery>
        {searchResults.length > 0 &&
          searchResults.map((result: any) => (
            <ImageCard key={result.id} {...result}>
              <PrimaryButton onClick={() => addMovie(result)}>
                <IconPlus />
              </PrimaryButton>
            </ImageCard>
          ))}
      </Gallery>
    </>
  );
}
