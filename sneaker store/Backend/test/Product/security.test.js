import jwt from "jsonwebtoken";
import { generateToken } from "../../security/jwt-util.js";

jest.mock("jsonwebtoken", () => ({
  sign: jest.fn(),
}));

describe("Security - JWT Util", () => {
  test("should generate JWT token", () => {
    jwt.sign.mockReturnValue("mocked-token");
    const token = generateToken({ product: { productId: 1 } });
    expect(token).toBe("mocked-token");
  });

  test("should call jwt.sign with correct payload", () => {
    generateToken({ product: { productId: 1 } });
    expect(jwt.sign).toHaveBeenCalledWith(
      { product: { productId: 1 } },
      expect.any(String),
      { expiresIn: "1h" }
    );
  });
});
