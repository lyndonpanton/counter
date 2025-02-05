import './css/Counter.css'
import { useState } from "react";

const Counter = () => {
    // const [count, setCount] = useState(0, () => {
    //     const localCount = localStorage.getItem("count");
    //     return localCount || 0;
    // });

    const [count, setCount] = useState(localStorage.getItem("count") || 0);

    function decrementCount() {
        let updatedCount = count - 1;
        setCount(updatedCount);

        updateLocalStorage(updatedCount);
    }

    function incrementCount() {
        let updatedCount = count + 1;
        setCount(updatedCount);

        updateLocalStorage(updatedCount);
    }

    function resetCount() {
        setCount(0);
        updateLocalStorage(0);
    }

    function updateLocalStorage(newCount) {
        localStorage.setItem("count", newCount);
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
