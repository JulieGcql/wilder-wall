import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>
, document.getElementById('root'));
serviceWorker.unregister();
