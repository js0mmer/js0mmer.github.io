import React from 'react';

const ThemeContext = React.createContext<{ theme: 'light' | 'dark', toggleTheme: () => void }>({
  theme: 'light',
  toggleTheme: () => {}
});

export default ThemeContext;