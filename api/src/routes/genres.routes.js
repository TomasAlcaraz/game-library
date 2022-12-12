const { Router } = require("express");
const router = Router();
const mwAddGenre = require("../middleware/addGenre.middleware");
const controller = require("../controllers/index.controller")

router.get("/", mwAddGenre, controller.getGenres);

module.exports = router;
