const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes'); // Asegúrate de usar la ruta correcta
const app = express();
const allowedOrigins = ['http://localhost:3001', 'http://localhost:3002'];
app.use(express.json()); // Middleware para parsear JSON
const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('CORS not allowed for this origin'));
        }
    },
    credentials: true
};
app.use(cors(corsOptions));
// Rutas
app.use('/api/v1/products', productRoutes); // Prefijo '/api/products' para todas las rutas de productos

const PORT = process.env.PORT || 3000;
const server = app.listen(3000, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    if (server.address()) {
        console.log(`Listening on port ${server.address().port}`);
    } else {
        console.log('Server address is not available.');
    }
});
module.exports = app;