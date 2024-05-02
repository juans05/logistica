import { useState, useEffect } from 'react';
import { getProductById } from '../services/productService';

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            const response = await getProductById();
            setProducts(response.data);
        };
        loadProducts();
    }, []);

    return products;
};

export default useProducts;
