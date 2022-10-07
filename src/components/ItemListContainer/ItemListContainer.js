import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import Title from "../Title/Title";
import ItemCount from "../ItemCount";
import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom";

const drinks= [
    {
        id:1,
        image:"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/211/660/products/andes-roja-ok1-f90c4cc4b6df7ff4af16196409075218-640-0.png",
        title:"Andes Roja",
        price:200,
        category:"beer",
    },
    {
        id:2,
        image:"https://www.espaciovino.com.ar/media/default/0001/55/thumb_54429_default_big.jpeg",
        title:"Heineken",
        price:250,
        category:"beer",
    },
    {
        id:3,
        image:"http://s3.amazonaws.com/storage.wobiz.com/149/149251/images/Large/1590789017_a2af1d1fe66848bf7696e2ad852e09b9.149251.jpeg",
        title:"Warsteiner",
        price:300,
        category:"beer",  
    },
    {
        id:4,
        image:"https://cepadevinos.com/wp-content/uploads/2021/01/B064.png",
        title:"Patagonia",
        price:300,
        category:"beer", 
    },
    {
        id:5,
        image:"https://www.mercadodevinos.com.ar/wp-content/uploads/2017/07/el-enemigo-malbec.jpg",
        title:"El Enemigo",
        price:1200,
        category:"wine", 
    },
    {
        id:5,
        image:"http://d3ugyf2ht6aenh.cloudfront.net/stores/851/791/products/2b903746-068e-4a2d-a0a5-f91c45f99399_nube-eef9a4045ee4c0cd6c15879420894633-640-0.jpg",
        title:"Amarula",
        price:1000,
        category:"liquors", 
    },
    {
        id:6,
        image:"https://http2.mlstatic.com/D_NQ_NP_815907-MLA44062203164_112020-V.jpg",
        title:"Jack Daniels",
        price:4000,
        category:"whisky", 
    },
];
const ItemListContainer = ()=>{

    const [data,setData]=useState([]);

    const {categoriaId}=useParams();

    useEffect(()=>{
        const getData= new Promise(resolve=>{
            setTimeout(()=>{
                resolve(drinks)
            },2000);
        });

        if(categoriaId){

            getData.then(res=> setData(res.filter(drink=> drink.category === categoriaId)));

        }else{

            getData.then(res=>setData(res));

        }

    },[categoriaId])

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