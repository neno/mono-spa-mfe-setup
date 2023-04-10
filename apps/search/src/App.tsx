import { ThemeProvider } from 'styled-components';
import { colorThemes, GlobalStyles } from '@myorg/ui';
import { StoreProvider } from '@myorg/store';
import { SearchAppContent } from './SearchAppContent';

function App() {
  return (
    <ThemeProvider theme={colorThemes['[data-theme=dark]']}>
      <GlobalStyles />
      <StoreProvider>
        <SearchAppContent />
      </StoreProvider>
    </ThemeProvider>
  );
}

export default App;
