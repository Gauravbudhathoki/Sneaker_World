import { User } from "../../model/index.js";

describe("User Model", () => {
  test("should have correct attributes", () => {
    expect(User.rawAttributes).toHaveProperty("name");
    expect(User.rawAttributes).toHaveProperty("email");
    expect(User.rawAttributes).toHaveProperty("password");
    expect(User.rawAttributes.email.validate).toHaveProperty("isEmail");
  });

  test("should not allow duplicate emails", async () => {
    try {
      await User.create({ name: "User1", email: "test@example.com", password: "password" });
      await User.create({ name: "User2", email: "test@example.com", password: "password" });
    } catch (error) {
      expect(error.name).toBe("SequelizeUniqueConstraintError");
    }
  });

  test("should hash password before saving", async () => {
    const user = await User.create({ name: "User3", email: "user3@example.com", password: "password" });
    expect(user.password).not.toBe("password");
  });
});
