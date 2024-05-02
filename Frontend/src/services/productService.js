
import axios from 'axios';

const baseUrl = '/api/v1/products';

export const getAllProducts = () => axios.get(baseUrl);
export const getProductById = (id) => axios.get(`${baseUrl}/${id}`);
export const createProduct = (productData) => axios.post(baseUrl, productData);
export const updateProduct = (id, productData) => axios.put(`${baseUrl}/${id}`, productData);
export const deleteProduct = (id) => axios.delete(`${baseUrl}/${id}`);