import { combineReducers } from 'redux';
import basesReducer from './reducer_bases';

const rootReducer = combineReducers({
  bases: basesReducer
});

export default rootReducer;
