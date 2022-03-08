import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import './App.scss';
import Routes from './routes/Routes';
import theme from './themes/theme';
import config from './utils/config';
import store from './store/store';

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
