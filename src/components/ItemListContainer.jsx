import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const { id } = useParams(); 
    console.log(id);


    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("valor" + id);
                let URLStore = id ? 'http://fakestoreapi.com/products/category/' +id : 'http://fakestoreapi.com/products/';
                console.log(URLStore);
                const response = await fetch(URLStore);
                const data = await response.json();

                //meter un filter aca

                const formattedProducts = data.map(product => ({
                    id: product.id,
                    title: product.title,
                    category: product.category,
                    image: product.image,
                    price: product.price
                }));

                setProducts(formattedProducts);
            } catch (error) {
                console.error('Error fetching data:' + error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <>
            <h1>Bienvenido a nuestra Tienda Online</h1>
            <h1>{props.greeting}</h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="container">
                            <div className="row">
                                {products.map((product) => (
                                    <div className="card col-6" key={product.id}>
                                        <img src={product.image} className="card-img-top"/>
                                        <div className="card-body">
                                            <h5 className="card-title">Title: {product.title}</h5>
                                            <h3 className="card-description">Description: {product.description} </h3>
                                            <p className="card-text">Price: ${product.price}</p>
                                            <Link to={`/item/:id${product.id}`} className="btn btn-primary">Añadir al carrito</Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemListContainer;
