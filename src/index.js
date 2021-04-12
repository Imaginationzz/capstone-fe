
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//REDUX IMPORTS
import { Provider } from "react-redux";
import createStore from "./redux/store";
import { ThemeProvider } from '@material-ui/styles';
import theme from "./theme"
const { store } = createStore()

ReactDOM.render(


  <Provider store={store}>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
