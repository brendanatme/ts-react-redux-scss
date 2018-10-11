/**
 * store/configure
 * 
 * add dev tools only when not in production
 * accept preloaded state as argument
 * this is useful for hydrating a server-side rendered app
 */
import { Action, applyMiddleware, createStore, StoreEnhancer } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './store.reducers';
import { IState } from './store.state';

const middlewares = [
  thunk,
];

let appliedMiddleware: StoreEnhancer;
if (process.env.NODE_ENV !== 'production') {
  const composeWithDevTools = require('redux-devtools-extension').composeWithDevTools; // tslint:disable-line
  appliedMiddleware = composeWithDevTools(
    applyMiddleware(...middlewares),
  );
} else {
  appliedMiddleware = applyMiddleware(...middlewares);
}

export const configure = (preloadedState: IState | {} = {}) => {
  const store = createStore<IState, Action<any>, {}, {}>(
    reducers,
    preloadedState,
    appliedMiddleware,
  );

  return store;
};
