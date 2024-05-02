const request = require('supertest');
const app = require('../src/app'); // Asegúrate de exportar tu aplicación Express en este archivo

describe("POST /products", () => {
  it("should create a new product and return 201 status code", async () => {
    const res = await request(app)
      .post('/api/v1/products')
      .send({
        nombre: "papayas",
        precio: 201,
        cantidad:2
      })
      .expect(201)
      .expect('Content-Type', /json/);
    
    expect(res.body).toEqual(jasmine.objectContaining({
      nombre: "papayas",
      precio: 201,
      cantidad:2
    }));
  });
});