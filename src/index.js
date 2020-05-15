import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import recipesReducer from './reducers/recipesReducer';

const rootReducer = combineReducers({recipes: recipesReducer})
const reducer = () => ({food: "potatoes"})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
  ));



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App /> 
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
