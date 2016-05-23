import * as React from 'react';
import { Provider } from 'react-redux'
import { render } from 'react-dom';
import styles from './global.css';
import fontStyles from './font/flaticon/flaticon.css';
require ('./font/flaticon/flaticon.css');

import App from './components/App.js';
import store from './createStore';

const rootElement = document.getElementById('root');

render(
    <Provider store={ store }>
        <App/>
    </Provider>,
    rootElement
);