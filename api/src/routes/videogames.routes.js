const { Router } = require("express");
const router = Router();
const controller = require("../controllers/index.controller");
const mwAddGames = require("../middleware/addGames.middleware");

router.get("/", mwAddGames, controller.getGames);
router.post("/", controller.createGame);
router.get("/:id", controller.getById);

module.exports = router;
