import './css/Counter.css'
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    function decrementCount() {
        setCount(count - 1);
    }

    function incrementCount() {
        setCount(count + 1);
    }

    function resetCount() {
        setCount(0);
    }

    return (
        <article>
            <p>{ count }</p>
            <section className="buttons">
                <button onClick = { decrementCount }>-</button>
                <button onClick = { resetCount }>Reset</button>
                <button onClick = { incrementCount }>+</button>
            </section>
        </article>
    )
};

export default Counter;
