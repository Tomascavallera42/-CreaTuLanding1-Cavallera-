import logo from "../../assets/logo.png"
import "./navbar.css";
import CartWidget from "../cartwidget/CartWidget";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar">
     <Link to="/">  <img className="logo" src={logo} alt="Logo de pagina" /></Link> 
 <div className="contserv">
    <h2>Servicios:</h2>
 <ul className="servicios">
  <li><Link to="/category/Desinsectacion" className="links">Fumigacion</Link></li>
  <li><Link to="/category/Control de plagas" className="links">Control de roedores</Link></li>
  <li><Link to="/category/Limpieza" className="links">Mantenimiento de jardin</Link></li>
</ul>
   </div>
   <CartWidget/>
   </div>

  )
}

export default NavBar;