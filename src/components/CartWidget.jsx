import React from 'react';
import LogoCart from '../assets/cart.png';
import { Link } from 'react-router-dom';

const CartWidget = ({ counter, style }) => {
    return (
        <Link to={'/item'} style={{ background: 'white'}}>
            <img src={LogoCart} alt="CartShopping" className='justify-content-spacebeetwen' width={30} />
        </Link>
    );
}

export default CartWidget;