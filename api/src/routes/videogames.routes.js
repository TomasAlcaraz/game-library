const { Router } = require("express");
const router = Router();
const controller = require("../controllers/index.controller");


router.get("/", controller.getByName);
router.get("/:idVideogame", controller.getById);

module.exports = router;