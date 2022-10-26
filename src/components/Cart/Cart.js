import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
const Cart=()=>{
    const{cart, totalPrice}= useCartContext();

    if (cart.length ===0 ){
        return(
            <>
                <p>No hay productos en el Carrito</p>
                <Link to='/'>Busca productos para agregar</Link>
            </>
        );
    }

    return(
        <>
            {
                cart.map(product=> <ItemCart key={product.Id} product={product}/>)
            }
            <p>
                total: {totalPrice()}
            </p>
        
        </>
    )
}

export default Cart;