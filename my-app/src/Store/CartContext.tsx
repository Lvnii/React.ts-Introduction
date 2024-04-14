import { PropsWithChildren, createContext, useCallback, useContext, useState, } from "react";
import { Products } from "../Type/ProductTypes";

export type ContextTypes = {
    data: Products[],
    addItem: (product: Products) => void,
    removeItem: (id: number) => void,
}

const CartContext = createContext<ContextTypes | null>(null);


export const CartContextProvider = ({children}: PropsWithChildren) => {
    const [ data, setData] = useState<Products[]>([]);

    const addItem = useCallback((product: Products) => {
        setData((prevState) => {
            const found = prevState.find(item => item.id === product.id);
            if (!found) {
                return [...prevState, {
                    ...product,
                    count: 1,
                }]
            } else {
                return [...prevState.map(item => {
                    return {
                        ...item,
                        count: item.id === product.id ? (item.count as number) + 1 : item.count
                    }
                })]
            }
        });
        
    }, []);
    console.log(data)

    const removeItem = useCallback((id: number) => {
        setData((prevState) => [...prevState.filter(item => item.id !== id)])
        
        // setData((prevState) => {
        //     const found = prevState.find(item => item.id === id);
        //     if (!found) {
        //         return [...prevState.filter(item => item.id !== id)]
        //     } else {
        //         return [prevState.map(item => {
        //             return {
        //                 ...item,
        //                 count: item.id === id ? (item.count as number) - 1 : item.count 
        //             }
        //         })]
        //     }
        // })
        
    }, [])

    return (
        <CartContext.Provider
            value={{
                data,
                addItem,
                removeItem,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);

export default useCart;