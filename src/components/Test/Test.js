// Test functional component using react hook for state
import React, {useState} from 'react';

const Test = () => {
    // Declare a new state variable called "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Test Component</h2>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
};

export default Test;
