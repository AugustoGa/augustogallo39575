import React from 'react'
import {useState, useEffect} from "react"
import ItemDetail from './ItemDetail'






export default function ItemDetailContainer() {


    const[productos , setProductos] = useState([])
const obtenerDatos = async () =>{
    const data = await fetch('./productos.json')
    const dataFetch = await data.json()
    setProductos(dataFetch);
}
    useEffect(()=>{
        obtenerDatos()
    },[])

    return (
    <>
            {productos.map(item => <ItemDetail key={item.id} {item.titulo} - {item.description}/>)}
    </>
    )
}


{/*productos.map(item=>(
    <li>key={item.id} {item.titulo} - {item.description} </li>
))
}





{/*import { useEffect,useState } from "react"
import ItemDetail from "./ItemDetail"
{/*import React from 'react'
import { useEffect,useState } from "react"
import ItemDetail from "./ItemDetail.js";

const leerDatos = async ()  => {
    try{
        const leer = await fetch('./productos.json')
        const post = await leer.json()
    }catch (error){
        console.log(error)
    }
};


export default function ItemDetailContainer() {
    const[productos , setProductos] = useState([])
    useEffect(() => {
        leerDatos().then(setProductos)
        },[]);
    return(
        <div className="myDivItem">
            <ItemDetail productos = {productos} />
        </div>
    )
};








export default function ItemDetailContainer() {
    const[productos , setProductos] = useState([])
    function leerDatos (){
        setTimeout(()=>{
            fetch('./productos.json')//formato en el que elijo mostar
            .then(res=> res.json())
            .then(datos => setProductos(datos))
            .catch(error => console.log("Error",error))
        }, 2000)
    }
    useEffect(()=>{
        let prosemaData = leerDatos();
        prosemaData.then((data)=>{
            setProductos(data)
        }).catch((error)=> alert(error))
    },[])
    return (
    <>
        <ItemDetail productos = {productos?.map(producto => <ItemDetail key={producto.id} producto={producto}/> )} />
    </>
    )
}
}



export default function ItemListContainer (){ //desestructurar una propiedad
    const[productos , setProductos] = useState([])
    useEffect(() => {
        fetch('./productos.json')//formato en el que elijo mostar
        .then(res=> res.json())
        .then(datos => setProductos(datos))
        .catch(error => console.log("Error",error))
        });
    return(
        <div className="myDivItem">
        {    {productos?.map(producto => <ItemDetail key={producto.id} producto={producto}/> )}}
        <ItemDetail productos = {productos}/>
        </div>
    )
};*/}