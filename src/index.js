import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { blue, orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: {
            main: orange[400],
            light: orange[300],
            dark: orange[600]
        },
        type:'dark'
    },
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <App />
    </MuiThemeProvider>
    , document.getElementById('root'));
