import { ThemeProvider } from 'styled-components';
import { colorThemes, GlobalStyles } from '@myorg/ui';
import { StoreProvider } from '@myorg/store';
import { Playlist } from './Playlist';

function App() {
  return (
    <ThemeProvider theme={colorThemes['[data-theme=light]']}>
      <GlobalStyles />
      <StoreProvider>
        <Playlist />
      </StoreProvider>
    </ThemeProvider>
  );
}

export default App;
