import jwt from "jsonwebtoken";
import { generateToken } from "../../security/jwt-util.js";

jest.mock("jsonwebtoken", () => ({
  sign: jest.fn(),
}));

describe("JWT Utility", () => {
  test("should generate a token", () => {
    jwt.sign.mockReturnValue("mocked-token");
    const token = generateToken({ user: { email: "test@example.com" } });
    expect(token).toBe("mocked-token");
  });

  test("should call jwt.sign with correct parameters", () => {
    generateToken({ user: { email: "test@example.com" } });
    expect(jwt.sign).toHaveBeenCalledWith(
      { user: { email: "test@example.com" } },
      expect.any(String), // secret key
      { expiresIn: "1h" }
    );
  });
});
