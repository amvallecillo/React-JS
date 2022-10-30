import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import swal from 'sweetalert';
const Cart=()=>{
    const{cart, totalPrice}= useCartContext();

    const [id, setId] = useState();
    const submitHandler= (ev)=>{
        ev.preventDefault();

        const order = {
            buyer:{
                name: ev.target[0].value,
                phone:ev.target[1].value,
                email: ev.target[2].value,
            },
            items: cart.map(product=>({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
            total:totalPrice(),
        };

        const db = getFirestore();
        const orderCollection = collection(db, 'order');/*Coleccion a la que hacemos referencia*/
        addDoc(orderCollection, order)
        .then((response)=> {
            setId(response.id);
        })

        swal("Gracias por su compra")
        .then((value) => {
        swal(`Su N° de Orden es: ${id}`);
        });

    };




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
                Total: ${totalPrice()}
            </p>
            <p>Complete los datos para finalizar la Orden de Compra</p>
            <div>
                <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input
                    name="name"
                    id="name"
                    />
                </div>
                <div>
                    <label htmlFor="phone">Teléfono</label>
                    <input
                    type="phone"
                    name="phone"
                    id="phone"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    />
                </div>
                
                <button type= "submit">Generar Orden de Compra</button>
                </form>
            
            </div>
        
        </>
    )
}

export default Cart;