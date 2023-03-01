
import NavBar from './Components/NavBar/NavBar';
import ItemCount from './Components/ItemCount/ItemCount';
import ItemListContainer from './Components/ItemLisContainer/ItemListContainer';
import { useState } from 'react';

function App() { //<ItemListContainer greeting={"holanda"}/>  asignandole el valor a una propç
  const [count , setCount] = useState() //guarda los datos que llegan del contador en un estado
  const onAdd = (cantidad) =>{
    setCount(cantidad)
  }
  return (
    <>
    {count}
    <NavBar/>
    <ItemListContainer/> 
    <ItemCount stock={6} inicial={1} onAdd={onAdd}/> 
    </>
  );
}

export default App;

