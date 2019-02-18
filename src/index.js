import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers/index';

import todos from './todos';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.scss';

let store = createStore(reducer, todos);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();