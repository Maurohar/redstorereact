import RedStoreArg from '../assets/logo.png';
import { Link } from 'react-router-dom';

const LogoNavBar = () =>{
    return(
        <Link to={'/'}>
        <img src={RedStoreArg} alt="Red Store Argentina." width={150}/>  
        </Link>
    )
}
export default LogoNavBar;