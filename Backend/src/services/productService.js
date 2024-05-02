const axios = require('axios');
const { API_BASE_URL } = require('../config/aws');

class ProductService {
  async getProductbyId(id) {
    return axios.get(`${API_BASE_URL}/products/${id}`);
  }

  async createProduct(productData) {
    console.log(productData);
    console.log(`${API_BASE_URL}/products`);
    return axios.post(`${API_BASE_URL}/products`, productData);
  }

  async updateProduct(id, productData) {
    return axios.put(`${API_BASE_URL}/products/${id}`, productData);
  }

  async deleteProduct(id) {
    return axios.delete(`${API_BASE_URL}/products/${id}`);
  }

  async getProduct() {
    try {
      const response = await axios.get(`${API_BASE_URL}/products/listar`);
      // Si la respuesta es exitosa, devuelve los datos directamente
      return {
        data:response.data,
        result:1
      }
    } catch (error) {
      if (error.response) {
        // El servidor respondió con un estado fuera del rango 2xx
        console.log("Error data -----:", error.response.data);  // Información de error proporcionada por el servidor
        console.log("Error status:", error.response.status);  // Código de estado HTTP
        if (error.response.status === 404) {
          // Devuelve o maneja el mensaje de error específico para el estado 404
          return {
            data:[],
            result:0
          }
        }
      } else if (error.request) {
        // La solicitud fue hecha pero no se recibió respuesta
        console.log("Error request:", error.request);
        throw new Error('No se recibió respuesta del servidor');
      } else {
        // Algo más causó un error al hacer la solicitud
        console.log("Error message:", error.message);
        throw new Error(error.message);
      }
    }
  }
}
module.exports = new ProductService(); 