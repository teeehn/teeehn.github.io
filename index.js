import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery';
import 'bootstrap';
import App from './src/App';
import './style.scss';

const message = 'Web Developer in Orange County, CA.';

ReactDOM.render(
    <App name='Tom Nicolosi' message={message} />,
    document.getElementById('root')
)
