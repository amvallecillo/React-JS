import React, {useState, useContext} from "react";
const CartContext = React.createContext([]);

export const useCartContext = ()=> useContext (CartContext) /*Creo una funcion para no tener que importar en todos lados el useContext del CartContext*/
const CartProvider = ({children})=>{
    const [cart,setCart]=useState([]); /*El carrito inicialmente esta vacio*/

    const addProduct = (item, quantity)=>{
        if(isInTheCart(item.id)){
            setCart(cart.map(product=>{
                return product.id=== item.id ? {...product, quantity:product.quantity + quantity}  : product
            }));
        }else {
            setCart ([...cart, {...item,quantity}])
        }
    }


    const clearCart=()=>setCart([]) /*Funcion para borrar el carrito, dejamos el setCart con el array vacio*/

    const isInTheCart=(id)=>cart.find (product =>product.id ===id) ? true : false; /*Funcion para saber si el producto esta en el carrito*/


    const removeProduct =(id)=>setCart(cart.filter(product =>product.id !==id)) /*Remover un producto, deja en el setCart el array de los productos que no coinciden con el id*/

    const totalPrice = ()=>{
        return cart.reduce((accum,prod)=> accum + (prod.quantity * prod.price), 0);
    }/*Suma los valores individuales de cada producto*/

    const totalProducts = ()=>cart.reduce((accumulator,presentProduct)=> accumulator + presentProduct.quantity,0);
    /*Suma la cantidad de productos*/

    
    return(
        <CartContext.Provider value={{
            clearCart,
            isInTheCart,
            removeProduct,
            addProduct,
            totalProducts,
            totalPrice,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;