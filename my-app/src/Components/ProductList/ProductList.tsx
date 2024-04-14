import useProducts, { ContextTypes } from "../../Store/ProductsContext"
import { Products } from "../../Type/ProductTypes";
import useCart from "../../Store/CartContext";
import { ContextTypes as CartContextTypes } from "../../Store/CartContext";

const ProductList = () => {
    const { data, isLoading} = useProducts() as ContextTypes;
    const { addItem } = useCart() as CartContextTypes;    
    return (
        <div>
            {isLoading ? <p>Loading...</p> : (
                <ul>
                    {data.map(item => {
                        return (
                            <li key={item.id}>
                                <div>
                                    <img src={item.thumbnail} alt="thumbnail" />
                                    <p>
                                        {item.brand} - {item.title}
                                    </p>
                                    <button onClick={() => addItem(item)}>Add to cart</button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default ProductList