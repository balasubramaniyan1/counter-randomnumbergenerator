import { useState } from "react";


function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prev) => prev + 1);
    };
    const decrement = () => {
        setCount((prev) => (prev > 0 ? prev - 1 : 0));
    };
    const reset = () => {
        setCount(0);
    };

    return (
        <section className="card">
            <h2>Counter</h2>
            <p className="value">{count}</p>

            {count === 0 && <p className="message warning">Minimum limit reached</p>}

            <div className="buttons">
                <button onClick={increment}>Increment</button>
                <button onClick={decrement} disabled={count === 0}>
                    Decrement
                </button>
                <button className="secondary" onClick={reset}>
                    Reset
                </button>
            </div>
        </section>
    );
}

export default Counter;