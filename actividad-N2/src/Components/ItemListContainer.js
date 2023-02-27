
import { useEffect,useState } from "react"
import ItemList from "./ItemList";


export default function ItemListContainer ({greeting}){ //desestructurar una propiedad
    const[productos , setProductos] = useState([])
    useEffect(() => {
        fetch('./productos.json')//formato en el que elijo mostar
        .then(res=> res.json())
        .then(datos => setProductos(datos))
        .catch(error => console.log("Error",error))
        });
    return(
        <div>
            <ItemList productos = {productos} />
            <h1>{greeting}</h1>
                </div>
    )
};
// otra forma 
/*
export default function ItemListContainer (greeting){
    return(
        <>
            <h1>Saludo</h1>
        </>
    )
};
*/