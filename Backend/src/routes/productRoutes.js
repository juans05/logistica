const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Definir las rutas para las operaciones CRUD
router.get('/listar/', productController.getProduct);
router.get('/:id', productController.getProductbyId);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);
module.exports = router;