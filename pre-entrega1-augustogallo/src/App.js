
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';

function App() { //<ItemListContainer greeting={"holanda"}/>  asignandole el valor a una prop
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"holanda"}/> 
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
