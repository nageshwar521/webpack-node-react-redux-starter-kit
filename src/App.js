import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import store from './redux/store';
import './App.scss';
import Routes from './routes/Routes';
import theme from './themes/theme';
import config from './config';

const AppRouterComponent = config.navigationType === 'history' ? BrowserRouter : HashRouter;

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <AppRouterComponent>
          <Routes />
        </AppRouterComponent>
      </Provider>
    </MuiThemeProvider>
  );
}
