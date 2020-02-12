import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import middlewareLogger from './middleware/middleware-logger';
import thunkMiddleware from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(middlewareLogger, thunkMiddleware));

  ReactDOM.render(<App store={store} />, document.getElementById('root'));



