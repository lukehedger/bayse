// import babel polyfill for Object.assign et al
import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import Root from './container/Root';
import { history } from 'react-router/lib/BrowserHistory';

ReactDOM.render(<Root history={history} />, document.getElementById('root'));
