import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    light: orange[200], // same as '#FFCC80',
    main: '#FB8C00', // same as orange[600]
    dark: '#EF6C00',
    contrastText: 'rgb(0,0,0)',
    primary: orange
  }
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root')
);
registerServiceWorker();
