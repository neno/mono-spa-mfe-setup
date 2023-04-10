import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export const MyComponent = () => {
  const themeContext = useContext(ThemeContext);

  console.log('Current theme: ', themeContext);
  return <div>MyComponent</div>;
  // ...
};
