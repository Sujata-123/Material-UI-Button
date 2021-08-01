import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import App from './App';
<ThemeProvider theme={theme}>...</ThemeProvider>;
ReactDOM.render(<App />, document.getElementById('root'));
