const express = require("express");
const router = express.Router();

const inputGroupController = require("../app/controllers/InputGroupController");

router.get("/", inputGroupController.index);

module.exports = router;
