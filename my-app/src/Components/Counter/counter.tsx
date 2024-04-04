// import Button from "./button";

import { useCallback, useState } from "react";

const Counter = () => {
    const [inputValue, setInputValue] = useState('')
    const [counterValue, setCounterValue] = useState(0)
    const handleClick = useCallback(() => {
        if (inputValue.length !== 0 && !isNaN(+inputValue)) {
            setCounterValue(prevState => prevState + (+inputValue))
        } else if (inputValue.length === 0) {
            setCounterValue(prevState => prevState + 1)
        }
    }, [inputValue])

    return (
        <div>
            <h2>{counterValue}</h2>
            <input value={inputValue} 
                type="text" 
                onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={handleClick}>Increase</button>
        </div>
    )

}

export default Counter;