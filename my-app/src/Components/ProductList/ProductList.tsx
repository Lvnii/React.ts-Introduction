import useProducts, { ContextTypes } from "../../Store/ProductsContext"

const ProductList = () => {
    const { data, isLoading} = useProducts() as ContextTypes;
    // console.log(typeof data)
    
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