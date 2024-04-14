import { useContext, createContext, PropsWithChildren, useState, useCallback, useEffect } from "react";
import { Products } from "../Type/ProductTypes";

export type ContextTypes = {
    data: Products[],
    isLoading: boolean,
}

const ProductContext = createContext<ContextTypes | null>(null);

export const ProductContextProvider = (props: PropsWithChildren) => {
    const [ data, setData] = useState<Products[]>([]); 
    const [ loading, setLoading] = useState<boolean>(false);
    
    const getData = useCallback(async () => {
        setLoading(true)
        try {
            const result = await fetch('https://dummyjson.com/products');
            const data = await result.json();
            setData(data.products)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }, [])
    
    useEffect(() => {
        getData()
    }, [getData])
    
    const { children } = props;

    return (
        <ProductContext.Provider value={{
            data: data,
            isLoading: loading,
        }}>
            {children}
        </ProductContext.Provider>
    )
}

const useProducts = () => useContext(ProductContext);

export default useProducts;
