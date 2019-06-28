import React from 'reactn';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import { setGlobal } from 'reactn';

setGlobal({
    currValue: 0,
    flag: false
});



ReactDOM.render(<App />, document.getElementById('root'));