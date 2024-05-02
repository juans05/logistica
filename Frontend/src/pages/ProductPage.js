import React from 'react';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

const ProductPage = () => {
    return (
        <div>
            <h1>Manage Products</h1>
            <ProductForm />
            <ProductList />
        </div>
    );
};

export default ProductPage;
