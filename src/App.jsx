import React from 'react';
import Signup from './signup-login/Signup';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Signup />
    </ThemeProvider>
  );
};

export default App;