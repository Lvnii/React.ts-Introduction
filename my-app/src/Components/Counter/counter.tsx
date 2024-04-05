import Button from "./button";
import Input from "./input";

import { useCallback, useState } from "react";

const Counter = () => {
    const [inputValue, setInputValue] = useState('')
    const [counterValue, setCounterValue] = useState(0)

    const handleChangeInputValue = (value: string) => {
        setInputValue(value);
    }

    const handleIncrease = useCallback(() => {
        if (inputValue.length !== 0 && !isNaN(+inputValue)) {
            setCounterValue(prevState => prevState + (+inputValue))
        } else if (inputValue.length === 0) {
            setCounterValue(prevState => prevState + 1)
        }
    }, [inputValue])

    const handleDecrease = useCallback(() => {
        if (inputValue.length !== 0 && !isNaN(+inputValue)) {
            setCounterValue(prevState => prevState - (+inputValue))
        } else if (inputValue.length === 0) {
            setCounterValue(prevState => prevState - 1)
        }
    }, [inputValue])

    const handleReset = useCallback(() => {
        setCounterValue(0)
    }, [inputValue])

    return (
        <div>
            <h2>{counterValue}</h2>
            <Input change={handleChangeInputValue}/>
            <div>
                <Button 
                    text={"Increase"}
                    click={handleIncrease}
                />
                <Button 
                    text={"Decrease"}
                    click={handleDecrease}
                />
                <Button 
                    text={"Reset"}
                    click={handleReset}
                />
            </div>
        </div>
    )

}

export default Counter;