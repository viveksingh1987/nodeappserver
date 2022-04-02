var express = require("express");
var userRouter = require("./user.routes");
describe("Running Tests for Users", () => {
  it("Test user Login", () => {
    userRouter.post("/user/login");
  });
});
