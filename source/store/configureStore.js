import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducer';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(
  thunk,
  logger
)(createStore);

export default function configureStore(initialState = {}) {

  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // enable Webpack hot module replacement for reducers
    module.hot.accept('../reducer', () => {
      const nextReducer = require('../reducer');
      store.replaceReducer(nextReducer);
    });
  }

  return store;

}
