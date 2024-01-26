import CartWidget from "../components/CartWidget";
import { Link, NavLink } from 'react-router-dom';

const NavBar = () =>{
    return(
        <>
        <ul className="nav">
        <li className="nav-item">
            <NavLink className="nav-link text-dark fs-5" to={"/category/men's clothing"}>men's clothing</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link text-dark fs-5" to={"/category/electronics"}>electronics</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link text-dark fs-5" to={"/category/jewelry"}>jewelry</NavLink>
        </li>
        </ul>
        <CartWidget />
        </>
    )
}
export default NavBar