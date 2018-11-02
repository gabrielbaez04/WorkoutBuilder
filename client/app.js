import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import {indigo, pink} from '@material-ui/core/colors'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import configureStore from '../redux/configureStore'
import 'babel-polyfill';

const store = configureStore()

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
    light: '#fff',
    main: '#333',
    dark: '#002984',
    contrastText: '#fff',
  },
  secondary: {
    light: '#ff79b0',
    main: '#ff4081',
    dark: '#c60055',
    contrastText: '#000',
  },
    openTitle: indigo['400'],
    protectedTitle: pink['400'],
    type: 'light'
  }
})

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <MainRouter/>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>
)

export default hot(module)(App)
