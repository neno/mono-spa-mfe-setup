import SearchForm from './components/SearchForm';
import { MyComponent } from './components/MyComponent';

function App() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="App">
      <h1>UI</h1>
      <SearchForm handleSubmit={handleSubmit} />
      <MyComponent />
    </div>
  );
}

export default App;
