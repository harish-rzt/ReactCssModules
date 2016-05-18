import * as React from 'react';
import {render} from 'react-dom';
import styles from './global.css';

import App from './components/App.js';

const rootElement = document.getElementById('root');

render(
    <App/>,
    rootElement
);