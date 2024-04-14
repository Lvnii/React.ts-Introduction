import useCart from "../../Store/CartContext";
import { ContextTypes } from "../../Store/CartContext";
import { Link } from "react-router-dom";

const CartList = () => {
    const { data, removeItem } = useCart() as ContextTypes;

    return (
        <div>
            {data.length === 0 ? (
                <p>
                    Cart is empty! Go to
                    <Link to={'/'}>Home Page</Link>    
                </p>
            ): (
                <ul>
                    {data.map(item => {
                        return (
                            <li key={item.id}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <img src={item.thumbnail} alt="thumbnail" />
                                <button onClick={() => removeItem(item.id)}>Remove from cart</button>
                                <h4>Quantity: {item.count}</h4>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default CartList;