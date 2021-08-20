import React from 'react';

const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name}, you are {props.age} years old.</p>
        </div>
        )
}
const App = () => {
    const name = "Cynthia";
    const age = 23;
    return (
        <>
            <h1>Greetings</h1>
            <Hello name="Ronald" age={19 + 1} />
            <Hello name="Janeth" age={age} />
            <Hello name={name} age={age} />
        </>
    );
};

export default App;