import { useEffect,useState } from "react"

export default function ItemListContainer ({greeting}){ //desestructurar una propiedad
    const[producto , setProducto] = useState([])
    useEffect(() => {
        fetch('productos.json')//formato en el que elijo mostar
        .then(res=> res.JSON.stringify())
        .then(res=> console.log(res))
        .then(res =>setProducto(res.results))
        .catch(error=> console.log("error",error))
        });
        console.log(producto);
    return(
        <div>
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