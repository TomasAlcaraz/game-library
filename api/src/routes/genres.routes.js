const { Router } = require("express");
const router = Router();
const controller = require("../controllers/index.controller");

router.get("/", controller.allGenres)

module.exports = router;