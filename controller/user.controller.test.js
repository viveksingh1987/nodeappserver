const { loginUser } = require("./user.controller");

describe("Test User Login Controller", () => {
  it("Test controller user login", () => {
    var request = { userName: "vivek", password: "abc123" };
    var response = {};
    loginUser(request, response);
  });
});
