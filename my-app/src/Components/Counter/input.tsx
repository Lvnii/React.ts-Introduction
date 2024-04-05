import { useState } from "react";

type Props = {
    change: (value: string) => void;
}

const Input = (props: Props) => {
    const { change } = props
    const [inputValue, setInputValue] = useState('')

    return (
        <input type="text" 
            value={inputValue}
            onChange={(e) => {
                setInputValue(e.target.value)
                change(e.target.value)
            }}
        />
    )
}

export default Input;