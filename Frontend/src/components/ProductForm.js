import React, { useState, useEffect } from 'react';
import { createProduct, updateProduct } from '../services/productService';

const ProductForm = ({ selectedProduct, onRefresh }) => {
    const [product, setProduct] = useState({ nombre: '', precio: '', cantidad: '' });

    useEffect(() => {
        if (selectedProduct) {
            setProduct(selectedProduct);
        }
    }, [selectedProduct]);

    const handleChange = e => {
        const { name, value } = e.target;
        setProduct(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async e => {
        debugger;
        e.preventDefault();
        if (product.id) {
            await updateProduct(product.id, product);
        } else {
            console.log(product)
            await createProduct(product);
        }
        onRefresh();  // para recargar la lista de productos
        setProduct({ nombre: '', precio: '', cantidad: '' });  // reset form
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input type="text" name="nombre" value={product.nombre}  required />
            </div>
            <div>
                <label>Precio:</label>
                <input type="number" name="precio" value={product.precio} required />
            </div>
            <div>
                <label>Cantidad:</label>
                <input type="number" name="cantidad" value={product.cantidad}  required />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ProductForm;
