
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from './Components/ItemCount';

function App() { //<ItemListContainer greeting={"holanda"}/>  asignandole el valor a una propç
  const onAdd = () =>{
    
  }
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"holanda"}/> 
    <ItemCount stock={6} inicial={1} onAdd={onAdd}/> 
    </>
  );
}
/* otra forma
function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer}/> 
    </>
  );
}
*/
export default App;
