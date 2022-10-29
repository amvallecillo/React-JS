import ItemDetail from "../ItemDetail/ItemDetail";
import React,{useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getFirestore, doc, getDoc} from 'firebase/firestore';


const ItemDetailContainer =()=>{

    const [data, setData]= useState({});
    const {detalleId}=useParams();

    useEffect(()=>{
       const querydb = getFirestore();/*Traemos Firestore*/
       const queryDoc = doc(querydb, 'items',detalleId);/*Buscamos una variable*/
       getDoc(queryDoc)
            .then(res=>setData({id: res.id, ...res.data()}))/*Traemos los datos con una promesa*/

    },[detalleId])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailContainer;