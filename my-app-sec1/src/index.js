import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import MyApp from './myApp'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
