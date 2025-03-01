import request from "supertest";
import express from "express";
import { productRouter } from "../../routes/productRouter.js";
import { Product } from "../../model/index.js";

jest.mock("../../model/index.js", () => ({
  Product: {
    findAll: jest.fn(),
    create: jest.fn(),
    findOne: jest.fn(),
    destroy: jest.fn(),
  },
}));

const app = express();
app.use(express.json());
app.use("/products", productRouter);

describe("Product Routes", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("GET /products - should return empty products list", async () => {
    Product.findAll.mockResolvedValue([]);
    const res = await request(app).get("/products");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ data: [], message: "No products found" });
  });

  test("POST /products - should return 400 if required fields are missing", async () => {
    const res = await request(app).post("/products").send({});
    expect(res.status).toBe(400);
  });

  test("POST /products - should create product and return 201", async () => {
    const product = {
      name: "Guarav",
      contactNumber: "1234567890",
      productName: "Sample Product",
      quantity: 10,
      price: 100.0,
    };

    Product.create.mockResolvedValue(product);

    const res = await request(app).post("/products").send(product);
    expect(res.status).toBe(201);
    expect(res.body).toEqual({
      data: product,
      message: "Product created successfully",
    });
  });

  test("GET /products/:id - should return 404 if product not found", async () => {
    Product.findOne.mockResolvedValue(null);

    const res = await request(app).get("/products/1");
    expect(res.status).toBe(404);
  });
});
