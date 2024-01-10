import React from 'react';
import LogoCart from '../assets/cart.png';

const CartWidget = ({ counter, style }) => {
    return (
        <a href="#" style={{ background: 'white'}}>
            <img src={LogoCart} alt="CartShopping" width={30} />
        </a>
    );
}

export default CartWidget;