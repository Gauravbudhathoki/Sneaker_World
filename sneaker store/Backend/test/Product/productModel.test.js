import { Product } from "../../model/index.js";

describe("Product Model", () => {
  test("should have required attributes", () => {
    const attributes = Product.rawAttributes;
    expect(attributes).toHaveProperty("productId");
    expect(attributes).toHaveProperty("name");
    expect(attributes).toHaveProperty("contactNumber");
    expect(attributes).toHaveProperty("productName");
    expect(attributes).toHaveProperty("quantity");
    expect(attributes).toHaveProperty("price");
  });

  test("should validate price as float", () => {
    expect(Product.rawAttributes.price.validate).toHaveProperty("isFloat");
  });

  test("should set default quantity to 0", () => {
    expect(Product.rawAttributes.quantity.defaultValue).toBe(0);
  });
});
