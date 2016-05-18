import * as React from 'react';
import {render} from 'react-dom';

import App from './components/App.js';

const rootElement = document.getElementById('root');

render(
    <App/>,
    rootElement
);