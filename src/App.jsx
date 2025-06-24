
import './App.css'
import Navbar from "./componets/NavBar";
import ItemListcontainer from './componets/ItemListcontainer';
function App() {
  

  return (
   <div>
    <Navbar/>
  <ItemListcontainer saludo =  {"Bienvenidos a Omega" } numero = {3} />
    <ItemListcontainer saludo =  {"Somos la empresa lider en control de plagas" } numero = {1} />
   </div>
  )
}

export default App
