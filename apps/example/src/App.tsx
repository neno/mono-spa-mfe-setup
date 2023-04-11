import SearchApp from '@myorg/search';
import PlaylistApp from '@myorg/playlist';
import { Shell } from '@myorg/ui';

function App() {
  return (
    <div className="App">
      <h1>Example App</h1>
      <Shell sidebar={<PlaylistApp />}>
        <SearchApp />
      </Shell>
    </div>
  );
}

export default App;
