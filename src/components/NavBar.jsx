import CartWidget from "../components/CartWidget";
import { Link, NavLink } from 'react-router-dom';

const NavBar = () =>{
    return(
        <>
        <ul className="nav">
        <li className="nav-item">
            <NavLink className="nav-link text-dark fs-5" to={"/category"}>Categorias</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link text-dark fs-5" to={"/product"}>Productos</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link text-dark fs-5" to={"/category/jewelery"}>Joyeria</NavLink>
        </li>
        </ul>
        <CartWidget />
        </>
    )
}
export default NavBar