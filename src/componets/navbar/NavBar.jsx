import logo from "../../assets/logo.png"
import "./navbar.css";
import CartWidget from "../cartwidget/CartWidget";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar">
   <img className="logo" src={logo} alt="Logo de pagina" />
 <div className="contserv">
    <h2>Servicios:</h2>
 <ul className="servicios">
  <li><Link to="/category/Desinsectacion">Fumigacion</Link></li>
  <li><Link to="/category/Control de plagas">Control de roedores</Link></li>
  <li><Link to="/category/Limpieza">Mantenimiento de jardin</Link></li>
</ul>
   </div>
   <CartWidget/>
   </div>

  )
}

export default NavBar;