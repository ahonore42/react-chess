import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import ChessReducer from './reducers/ChessReducer';
import UIReducer from './reducers/UIReducer';

const store = createStore(
  combineReducers({
    chessState: ChessReducer,
    uiState: UIReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))  
);

export default store;