import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Asegúrate de instalar react-router-dom
import { getProductById } from '../services/productService';

const ProductDetailPage = () => {
    const [product, setProduct] = useState(null);
    const [error, setError] = useState('');
    const { id } = useParams(); // Obtiene el ID del producto desde la URL

    useEffect(() => {
        const loadProduct = async () => {
            try {
                const response = await getProductById(id);
                setProduct(response.data);
            } catch (err) {
                setError('Failed to fetch product');
                console.error(err);
            }
        };

        loadProduct();
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h1>Producto Detalle</h1>
            <div>
                <h2>{product.nombre}</h2>
                <p>Precio: ${product.precio}</p>
                <p>cantidad: {product.cantidad}</p>
            </div>
        </div>
    );
};

export default ProductDetailPage;
