import ItemDetail from "../ItemDetail/ItemDetail";
import React,{useEffect, useState} from "react";

const beers= {
    id:1,
    image:"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/211/660/products/andes-roja-ok1-f90c4cc4b6df7ff4af16196409075218-640-0.png",
    title:"Andes Roja",
    price: 10,
};
const ItemDetailContainer =()=>{

    const [data, setData]= useState({})

    useEffect(()=>{
        const getData= new Promise(resolve=>{
            setTimeout(()=>{
                resolve(beers)
            },2000);
        });
        getData.then(res=>setData(res));

    },[])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;