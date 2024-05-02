import React, { useEffect, useState } from 'react';
import { getProductById, deleteProduct } from '../services/productService';

const ProductList = ({ onSelectProduct, onRefresh }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const response = await getProductById();
        setProducts(response.data);
    };

    const handleDelete = async id => {
        await deleteProduct(id);
        onRefresh();  // para recargar la lista después de eliminar
    };

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.nombre} - ${product.precio} - Cantidad: {product.cantidad}
                        <button onClick={() => onSelectProduct(product)}>Editar</button>
                        <button onClick={() => handleDelete(product.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
