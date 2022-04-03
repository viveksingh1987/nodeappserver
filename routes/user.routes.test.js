const request = require("supertest");
const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./user.routes");

const app = new express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/user", userRouter);

describe("Test User Routes", () => {
  it("Test user login failed with bad request", async () => {
    await request(app)
      .post("/user/login")
      .then((res) => {
        expect(res.statusCode).toBe(400);
      });
  });

  it("Test User is logged in failed and user not found", async () => {
    await request(app)
      .post("/user/login")
      .send({ userName: "vivek@gmail.com", password: "abc123" })
      .then((res) => {
        expect(res.statusCode).toBe(401);
      });
  });

  it("Test User is logged in with given credentials", async () => {
    const res = await request(app)
      .post("/user/login")
      .send({ userName: "vivek@gmail.com", password: "abc123" });
    expect(res.statusCode).toBe(201);
  });
});
