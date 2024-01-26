import React from "react";
import { Link } from "react-router-dom";

const ItemDetailContainer = ({ id, title, category, image, price  }) => {
    return (
        <div className="container pb-5 mb-2"> 

            <div className="cart-item d-md-flex justify-content-between">
                <span className="remove-item"><i className="fa fa-times"></i></span>
                <div className="px-3 my-3">
                    <Link className="cart-item-product">
                        <div className="cart-item-product-thumb"><img src={image} alt="Product-image" /></div>
                        <div className="cart-item-product-info">
                            <h4 className="cart-item-product-title">{title}</h4>
                            <span><strong>Title:</strong>{title}</span>
                        </div>
                    </Link>
                </div>
                <div className="px-3 my-3 text-center">
                    <div className="cart-item-label">Cantidad</div>
                    <div className="count-input">
                        <select className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                        </select>
                    </div>
                </div>
                <div className="px-3 my-3 text-center">
                    <div className="cart-item-label">Total Price</div>
                    <span className="text-xl font-weight-medium">$9999</span>
                </div>
            </div>

            <div className="d-sm-flex justify-content-between align-items-center text-center text-sm-left">
                <div className="py-2">
                    <span className="d-inline-block align-middle text-sm text-muted font-weight-medium text-uppercase mr-2">Subtotal:</span>
                    <span className="d-inline-block align-middle text-xl font-weight-medium">$188.50</span>
                </div>
            </div>
            <hr className="my-2" />
            <div className="row pt-3 pb-5 mb-2">
                <div className="col-sm-6 mb-3">
                    <Link to="checkout-address.html" className="btn btn-style-1 btn-primary btn-block">
                        <i className="fe-icon-credit-card"></i>&nbsp;Gracias por su compra!
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ItemDetailContainer;
