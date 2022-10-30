import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";
const Cart=()=>{
    const{cart, totalPrice}= useCartContext();

    const order = {
        buyer:{
            name: 'Andres',
            phone:'4301119',
            email: 'andres@gmail.com',
        },
        items: cart.map(product=>({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        total:totalPrice(),
    }

    const ClickHandler= ()=>{
        const db = getFirestore();
        const orderCollection = collection(db, 'order');/*Coleccion a la que hacemos referencia*/
        addDoc(orderCollection, order)
            .then(({id}) => console.log(id))

    }

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
                cart.map(product=> <ItemCart key={product.id} product={product}/>)
            }
            <p>
                total: {totalPrice()}
            </p>
            <button onClick={ClickHandler}>Generar orden de Compra</button>
        
        </>
    )
}

export default Cart;