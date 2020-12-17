import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import ChessReducer from './reducers/ChessReducer';

const store = createStore(
  combineReducers({
    chessState: ChessReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))  
);

export default store;