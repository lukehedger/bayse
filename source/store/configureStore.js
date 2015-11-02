import { createStore, applyMiddleware, compose } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducer';

const logger = createLogger();

const finalCreateStore = compose(
  applyMiddleware(thunk, logger),
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

export default function configureStore() {

  const store = finalCreateStore(rootReducer);

  if (module.hot) {
    // enable Webpack hot module replacement for reducers
    module.hot.accept('../reducer', () => {
      const nextReducer = require('../reducer');
      store.replaceReducer(nextReducer);
    });
  }

  return store;

}
