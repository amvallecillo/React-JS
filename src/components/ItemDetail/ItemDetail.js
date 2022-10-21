import ItemCount from "../ItemCount/ItemCount";
import React, {useState} from "react";
import { Link } from "react-router-dom";
const ItemDetail =({data})=>{
    const [goCart,setGoCart]=useState(false);

    const onAdd=(cantidad)=>{
        setGoCart(true);
    }

    return (
        <div className="contenedor">
        <div className="detail">
            <img className="detail_image" src={data.image} alt=""  />
            <div className="content">
                <h3>{data.title}</h3>
                <h4>{data.price}</h4>
                {
                    goCart ? <Link to= '/cart'>Finalizar Compra</Link> : <ItemCount initial={1} stock={10} onAdd={onAdd}  />
                }
                
            </div>


        </div>



        </div>
    );
}

export default ItemDetail;