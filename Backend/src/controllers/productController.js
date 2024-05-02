const productService = require('../services/productService');

exports.getProductbyId = async (req, res) => {
  try {
   
    const product = await productService.getProductbyId(req.params.id);
    res.status(201).json(product.data);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not retrieve product' });
  }
};

exports.createProduct = async (req, res) => {
  try {
    console.log('ss','createProduct');
    const product = await productService.createProduct(req.body);
    res.status(201).json(product.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not create product' });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    console.log('ss','updateProduct');
    const product = await productService.updateProduct(req.params.id, req.body);
    res.json(product.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not update product' });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    console.log('ss','deleteProduct');
    await productService.deleteProduct(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not delete product' });
  }
};


exports.getProduct = async (req, res) => {
  try {
    debugger
    console.log('ss','getProduct');
    const product = await productService.getProduct();
    console.log('************',product);
  
    res.json(product);
  } catch (error) {
    if (error.response) {
      // El servidor respondió con un estado fuera del rango 2xx
      console.log("Error data:", error.response);  // Información de error proporcionada por el servidor
      console.log("Error status:", error.response.status);  // Código de estado HTTP
      if (error.response.status === 404) {
        // Devuelve o maneja el mensaje de error específico para el estado 404
        res.json(product.data);
        
      }
    } else if (error.request) {
      // La solicitud fue hecha pero no se recibió respuesta
      console.log("Error request:", error.request);
      res.status(500).json({ error: 'No se recibió respuesta del servidor' });
      
    } else {
      // Algo más causó un error al hacer la solicitud
      res.status(500).json({ error:error.message });
    }
    
   
  }
};