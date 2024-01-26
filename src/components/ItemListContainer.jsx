import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import database from '../database.json';

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const { id } = useParams(); 

    useEffect(() => {
        const fetchData = () => {
            try {
                let filteredProducts = database; // Usa los datos del archivo JSON local

                // Filtra los productos por categoría si se proporciona un ID de categoría
                if (id) {
                    filteredProducts = database.filter(product => product.category.toLowerCase() === id.toLowerCase());
                }

                // Formatea los productos
                const formattedProducts = filteredProducts.map(product => ({
                    id: product.id,
                    title: product.title,
                    category: product.category,
                    image: product.image,
                    price: product.price,
                    description: product.description // Asegúrate de incluir la descripción si la necesitas
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
