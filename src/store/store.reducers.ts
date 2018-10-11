/**
 * store/reducers
 * 
 * creates root reducer for entire store
 * add new module reducers here
 */
import { combineReducers } from 'redux';

export const reducers = combineReducers({
  stub: (state: {} = {}) => state,
});
