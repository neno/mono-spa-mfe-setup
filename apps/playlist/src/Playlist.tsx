import { useStore } from '@myorg/store';
import { ImageCard, Gallery, PrimaryButton, IconTrash } from '@myorg/ui';

export function Playlist() {
  const { movies, deleteMovie } = useStore();
  return (
    <div className="App">
      <h1>Playlist App</h1>
      {movies.length > 0 && (
        <Gallery>
          {movies.map((movie: any) => (
            <ImageCard key={movie.id} {...movie}>
              <PrimaryButton onClick={() => deleteMovie(movie)}>
                <IconTrash />
              </PrimaryButton>
            </ImageCard>
          ))}
        </Gallery>
      )}
    </div>
  );
}
