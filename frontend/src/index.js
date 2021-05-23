import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import mainReducer from './redux/reducers/mainReducer'
import thunk from 'redux-thunk';

const miStore = createStore(mainReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={miStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

