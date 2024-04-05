type Props = {
    text: string,
    click: () => void,
}

const Button = (props: Props) => {
    const {text, click} = props

    return <button onClick={click}>{text}</button>
}

export default Button;