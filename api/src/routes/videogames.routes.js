const { Router } = require("express");
const router = Router();
const controller = require("../controllers/index.controller");

router.get("/", controller.getGames);
router.post("/", controller.createGame);
router.get("/:id", controller.getById);

module.exports = router;
