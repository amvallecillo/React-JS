import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import Title from "../Title/Title";
import ItemCount from "../ItemCount";
import React,{useState, useEffect} from "react";

const beers= [
    {
        id:1,
        image:"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/211/660/products/andes-roja-ok1-f90c4cc4b6df7ff4af16196409075218-640-0.png",
        title:"Andes Roja"
    },
    {
        id:2,
        image:"https://www.espaciovino.com.ar/media/default/0001/55/thumb_54429_default_big.jpeg",
        title:"Heineken"   
    },
    {
        id:3,
        image:"http://s3.amazonaws.com/storage.wobiz.com/149/149251/images/Large/1590789017_a2af1d1fe66848bf7696e2ad852e09b9.149251.jpeg",
        title:"Warsteiner"   
    },
    {
        id:4,
        image:"https://cepadevinos.com/wp-content/uploads/2021/01/B064.png",
        title:"Patagonia"   
    },
];
const ItemListContainer = ()=>{

    const [data,setData]=useState([]);

    useEffect(()=>{
        const getData= new Promise(resolve=>{
            setTimeout(()=>{
                resolve(beers)
            },2000);
        });
        getData.then(res=>setData(res))

    },[])

    const onAdd=(cantidad)=>{
        console.log(`Compraste ${cantidad} unidades`)
    }

    return (
        <>
        <Title greeting='Bienvenidos a Andrelos Bar' />
        <ItemCount initial={1} stock={10} onAdd={onAdd}  />
        <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;