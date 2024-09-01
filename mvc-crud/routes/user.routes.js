const { Router } = require("express");

const userRoutes = Router();
const { getUser, creatUser } = require("../controllers/user.controller.js");
userRoutes.get("/", getUser);
userRoutes.post("/", creatUser);

module.exports = userRoutes;
