import { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemLisContainer/ItemListContainer';
import ItemCount from './Components/ItemLisContainer/ItemCount/ItemCount';






function App() { 
  const [count , setCount] = useState() //guarda los datos que llegan del contador en un estado
  const onAdd = (cantidad) =>{
    setCount(cantidad)
  }
  return ( 
    <>
    
    <NavBar /> 
    
      {count}
        <ItemListContainer greeting={"Bienvenidos"} />
        <ItemCount stock={6} inicial={1} onAdd={onAdd} /> 
      
    
    </>
  );
}

export default App;

