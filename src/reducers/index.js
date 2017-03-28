import { combineReducers } from 'redux';
import basesReducer from './reducer_bases';
import cardsReducer from './reducer_cards';

const rootReducer = combineReducers({
  bases: basesReducer,
  cards: cardsReducer
});

export default rootReducer;
