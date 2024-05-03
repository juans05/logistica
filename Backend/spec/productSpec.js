const request = require('supertest');
const app = require('../src/app'); // Asegúrate de exportar tu aplicación Express en este archivo

describe("POST /products", () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  let productUuid;
  it("should create a new product and return 201 status code", async () => {
    const res = await request(app)
      .post('/api/v1/products')
      .send({
        nombre: "papsayas",
        precio: 201,
        cantidad:2
      })
      .expect(201)
      
      productUuid = res.body.id;
      expect(productUuid).toBeDefined();  // Verifica que realmente obtuviste un ID
  
      console.log("Product ID:", productUuid);
  });
  it("should update an existing product", done => {
    console.log("Product ID:", productUuid);
    console.log("Product ID Actualizar:", productUuid);
    request(app)
    .put(`/api/v1/products/${productUuid}`)  // Asegúrate de incluir el ID del producto
    .send({ nombre: 'Updated Product', precio: 150, cantidad: 5 })
    .expect(200)
    .end(function(err, res) {
        if (err) return done(err);
        // Verificaciones adicionales pueden ir aquí
        expect(res.body).toEqual(jasmine.objectContaining({
          nombre: 'Updated Product',
          precio: 150,
          cantidad: 5
        }));
        done();  // Indica que la prueba ha terminado
    });
  });                                                                                    
  it("should delete a product and return 204 status code", done => {
    // Asumiendo que `productUuid` es el ID de un producto existente
    request(app)
      .delete(`/api/v1/products/${productUuid}`)
      .expect(204)
      .end(function(err, res) {
        if (err) return done(err);
        // Verificaciones adicionales pueden ir aquí, por ejemplo, verificar que el producto ya no existe
        done();
      });
  }); 
});