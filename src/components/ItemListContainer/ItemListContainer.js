import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import Title from "../Title/Title";
import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';

const ItemListContainer = ()=>{

    const [data,setData]=useState([]);

    const {categoriaId}=useParams();

    useEffect(()=>{

        const querydb =getFirestore();/*Traemos Firestore*/
        const queryCollection= collection(querydb,'items');/*Buscamos una coleccion*/
       
        if(categoriaId){
            const queryFilter=query(queryCollection, where('category', '==', categoriaId))
            /*Realizamos un filtrado del query, buscamos que coincida la categoria*/
            getDocs (queryFilter).then(res=>setData(res.docs.map(product=>({id: product.id, ...product.data()}))))
        }else{
            getDocs (queryCollection).then(res=>setData(res.docs.map(product=>({id: product.id, ...product.data()}))))
        }/*Sino busca toda la colección*/
    },[categoriaId])


    return (
        <>
        <Title greeting='Bienvenidos a Andrelos Bar' />
        <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;