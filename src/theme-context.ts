import React from 'react';

export const themes = {
  light: false,
  dark: true
};

export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {}
});