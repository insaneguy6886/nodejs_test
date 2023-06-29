const express = require("express");
const router = express.Router();

const inputGroupController = require("../app/controllers/InputGroupController");

router.use("/", inputGroupController.index);

module.exports = router;
