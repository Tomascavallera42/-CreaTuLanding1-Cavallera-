import "./navbar.css";
import omegaLogo from "../assets/imagenomegalogo.png";
import CartWidget from "./CartWidget";
const NavBar = () => {
  return (
    <div className="navbar">
   <img className="logo" src={omegaLogo} alt="Logo de pagina" />
 <div className="contserv">
    <h2>Servicios:</h2>
   <ul className="servicios">
 
    <li>Fumigacion</li>
    <li>Control de roedores</li>
    <li>Mantenimiento de jardin</li>
   </ul>
   </div>
   <CartWidget/>
   </div>

  )
}

export default NavBar;