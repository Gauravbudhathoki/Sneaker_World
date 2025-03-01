import request from "supertest";
import express from "express";
import { authRouter } from "../../routes/authRouter.js";

const app = express();
app.use(express.json());
app.use("/auth", authRouter);

describe("Auth Routes", () => {
  test("POST /auth/login - should return 400 for missing fields", async () => {
    const res = await request(app).post("/auth/login").send({});
    expect(res.status).toBe(400);
  });

  test("POST /auth/create - should return 400 for missing fields", async () => {
    const res = await request(app).post("/auth/create").send({});
    expect(res.status).toBe(400);
  });

  test("POST /auth/resetPassword - should return 400 for missing fields", async () => {
    const res = await request(app).post("/auth/resetPassword").send({});
    expect(res.status).toBe(400);
  });

  test("GET /auth/init - should return 401 if unauthorized", async () => {
    const res = await request(app).get("/auth/init");
    expect(res.status).toBe(401);
  });
});
