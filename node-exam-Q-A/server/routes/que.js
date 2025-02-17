const express = require("express");
const { createQuestion, getQuestions } = require("../controller/que");

const router = express.Router();

router.post("/create", createQuestion);
router.get("/", getQuestions);

module.exports = router;
