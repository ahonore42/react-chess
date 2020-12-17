import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ChessReducer from './reducers/ChessReducer'

import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({
    chessState: ChessReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))  
);

export default store;