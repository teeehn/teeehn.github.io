import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App';
import './src/scss/main.scss';

const message = 'Web Developer in Orange County, CA.';

ReactDOM.render(
    <App name='Tom Nicolosi' message={message} />,
    document.getElementById('root')
);
