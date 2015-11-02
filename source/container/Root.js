import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { Router, Route } from 'react-router';
import configureStore from '../store/configureStore';

// containers
import App from './App';
import Counter from './Counter';

const store = configureStore();

export default class Root extends Component {

  render() {

    return (
      <div>
        <Provider store={store}>
          <Router history={this.props.history}>
            <Route path="/" component={App}>
              <Route path="/counter" component={Counter} />
            </Route>
          </Router>
        </Provider>

        {/* dev tools */}
        <DebugPanel top right bottom>
          <DevTools store={store}
                    monitor={LogMonitor}
                    visibleOnLoad={false} />
        </DebugPanel>
      </div>
    );

  }

}
