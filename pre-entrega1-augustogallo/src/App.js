
import NavBar from './Components/NavBar';

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
