import { useStore } from '@myorg/store';
import {
  ImageCard,
  Gallery,
  PrimaryButton,
  IconTrash,
  ListItem
} from '@myorg/ui';

export function Playlist() {
  const { movies, deleteMovie } = useStore();
  return (
    <div className="App">
      <h1>Playlist App</h1>
      {movies.length > 0 && (
        <ul>
          {movies.map((movie: any) => (
            <ListItem
              key={movie.id}
              img={movie.poster_path}
              title={movie.title}
              text={movie.overview}
            >
              <PrimaryButton onClick={() => deleteMovie(movie)}>
                <IconTrash />
              </PrimaryButton>
            </ListItem>
            // <ImageCard key={movie.id} {...movie}>
            //   <PrimaryButton onClick={() => deleteMovie(movie)}>
            //     <IconTrash />
            //   </PrimaryButton>
            // </ImageCard>
          ))}
        </ul>
      )}
    </div>
  );
}
