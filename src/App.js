import React from 'react';

const App = ({ name, ...props}) => {
    return (
        <div className="container-fluid d-flex flex-column align-items-center justify-content-center h-100 text-light bg-gradient-dark">
            <h1>{ name }</h1>
            <p>{ props.message }</p>
        </div>
    )
}

export default App;
