import React, { useState, useEffect } from 'react';
import './Detail.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const [products, setProducts] = useState([]);
    const { category } = useParams();
    console.log(category);

    useEffect(() => {
        const getProducts = async () => {
            try {
                let response = await axios.get(`http://localhost:5000/api/get-products/${category}`);
                console.log(response.data.products);
                setProducts(response.data.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        getProducts();
    }, [category]);

    return (
        <>
        <h1>Products in {category}</h1>
            <div className='Main-card'>
                {products && products.map((item) => (
                    <div className='content' key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <h2>{item.name}</h2>
                        <h3>{item.category}</h3>
                        <h4>{item.price}</h4>
                        <h4>{item.description}</h4>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Detail;
 