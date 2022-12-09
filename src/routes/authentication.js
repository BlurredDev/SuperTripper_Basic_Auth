const { Router } = require("express");

const AuthenticationController = require("../controllers/AuthenticationController");

module.exports = () => {
  const router = Router();
  router.post("/login", AuthenticationController.login);
  return router;
};
