import React from 'react';

const App = ({ name, ...props}) => {
    return (
        <div className="tn__site--wrapper flex one">
            <section>
                <h1>{ name }</h1>
                <p>{ props.message }</p>
            </section>
        </div>
    )
}

export default App;
