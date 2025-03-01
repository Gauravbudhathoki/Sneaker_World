import bcrypt from "bcrypt";
import { authController } from "../../controller/index.js";
import { User } from "../../model/index.js";
import { generateToken } from "../../security/jwt-util.js";

jest.mock("../../model/index.js", () => ({
    User: {
        findOne: jest.fn(),
        create: jest.fn(),
        sync: jest.fn(),
    },
}));

jest.mock("../../security/jwt-util.js", () => ({
    generateToken: jest.fn(),
}));

describe("Auth Controller Tests", () => {
    let res;

    beforeEach(() => {
        res = {
            status: jest.fn(() => res),
            json: jest.fn(),
            send: jest.fn(),
        };

        jest.clearAllMocks();
    });

    test("Login - Missing email or password", async () => {
        await authController.login({ body: {} }, res);
        expect(res.status).toHaveBeenCalledWith(400);
    });

    test("Login - User not found", async () => {
        User.findOne.mockResolvedValue(null);
        await authController.login({ body: { email: "test@example.com", password: "pass123" } }, res);
        expect(res.status).toHaveBeenCalledWith(404);
    });

    test("Login - Invalid password", async () => {
        const user = { toJSON: () => ({}), password: "hashedpassword" };
        User.findOne.mockResolvedValue(user);
        jest.spyOn(bcrypt, "compare").mockResolvedValue(false);

        await authController.login({ body: { email: "test@example.com", password: "wrong" } }, res);
        expect(res.status).toHaveBeenCalledWith(401);
    });

    test("Login - Successful", async () => {
        const user = { toJSON: () => ({ email: "test@example.com" }), password: "hashedpassword" };
        User.findOne.mockResolvedValue(user);
        jest.spyOn(bcrypt, "compare").mockResolvedValue(true);
        generateToken.mockReturnValue("mocked-token");

        await authController.login({ body: { email: "test@example.com", password: "pass123" } }, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
            data: { access_token: "mocked-token" },
        }));
    });
});
