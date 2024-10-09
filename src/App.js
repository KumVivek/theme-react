import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import customTheme from './theme';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div style={{ padding: '20px' }}>
        <Button variant="contained" color="primary">
          Custom Primary Button
        </Button>
        <Button variant="outlined" color="secondary">
          Custom Secondary Button
        </Button>
        <Button >Standard link</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
