import { useState } from "react";


function RandomNumberGenerator() {
    const [number, setNumber] = useState(null);

    const generate = () => {
        setNumber(Math.floor(Math.random() * 100) + 1);
    };

    return (
        <section className="card">
            <h2>Random Number Generator</h2>

            {number === null ? (
                <p className="message">No number generated yet</p>
            ) : (
                <p className="value">{number}</p>
            )}

            <div className="buttons">
                <button onClick={generate}>Generate Random Number</button>
            </div>
        </section>
    );
}

export default RandomNumberGenerator;