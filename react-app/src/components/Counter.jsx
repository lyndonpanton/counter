import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <p></p>
            <>
                <button>-</button>
                <button>Reset</button>
                <button>+</button>
            </>
        </>
    )
};

export default Counter;
