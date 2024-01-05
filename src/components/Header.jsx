import React from 'react';
import Logo from "../components/Logo";
import NavBar from '../components/NavBar';
import PedirRetirar from '../components/PedirRetirar'; 

const Header = () => {
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-md-2">
                    <Logo />
                </div>
                <div className="col-md-8 d-flex align-items-center">
                    <NavBar />
                </div>
                <div className='col-md-2 text-end align-items-center'>
                    <PedirRetirar />
                </div>
            </div>
        </div>
    )
}

export default Header;