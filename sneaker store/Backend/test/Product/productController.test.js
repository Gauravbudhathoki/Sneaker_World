import { Product } from "../../model/index.js";
import { productController } from "../../controller/index.js";

jest.mock("../../model/index.js", () => ({
  Product: {
    findAll: jest.fn(),
    create: jest.fn(),
    findOne: jest.fn(),
  },
}));

describe("Product Controller", () => {
  let res;

  beforeEach(() => {
    res = {
      status: jest.fn(() => res),
      json: jest.fn(),
      send: jest.fn(),
    };
    jest.clearAllMocks();
  });

  describe("getAllProducts", () => {
    test("should return empty list if no products", async () => {
      Product.findAll.mockResolvedValue([]);
      await productController.getAllProducts({}, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({ data: [], message: "No products found" });
    });

    test("should return products if found", async () => {
      const products = [{ productId: 1, productName: "Test Product" }];
      Product.findAll.mockResolvedValue(products);
      await productController.getAllProducts({}, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({ data: products, message: "Successfully fetched data" });
    });
  });

  describe("createProduct", () => {
    test("should return 400 for missing fields", async () => {
      const req = { body: {} };
      await productController.createProduct(req, res);
      expect(res.status).toHaveBeenCalledWith(400);
    });

    test("should create product and return 201", async () => {
      const req = {
        body: {
          name: "Gaurav",
          contactNumber: "1234567890",
          productName: "Sample Product",
          quantity: 10,
          price: 100.0,
        },
      };

      Product.create.mockResolvedValue(req.body);
      await productController.createProduct(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.send).toHaveBeenCalledWith({
        data: req.body,
        message: "Product created successfully",
      });
    });
  });

  describe("getProductById", () => {
    test("should return 404 if product not found", async () => {
      const req = { params: { id: 1 } };
      Product.findOne.mockResolvedValue(null);

      await productController.getProductById(req, res);
      expect(res.status).toHaveBeenCalledWith(404);
    });

    test("should return product if found", async () => {
      const req = { params: { id: 1 } };
      const product = { productId: 1, productName: "Test Product" };
      Product.findOne.mockResolvedValue(product);

      await productController.getProductById(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({
        message: "Product fetched successfully",
        data: product,
      });
    });
  });

  // Similarly add updateProduct and deleteProduct tests
});
