const { Router } = require("express");
const {
  CalcController: { create, update, remove, sync },
} = require("../controllers");
const { documentCheck, dataCheck, tokenCheck } = require("../middleware");

const router = new Router();

router.get("/sync", tokenCheck, documentCheck, sync);
router.post("/create", dataCheck, create);
router.put("/update", tokenCheck, documentCheck, dataCheck, update);
router.delete("/remove", tokenCheck, remove);

module.exports = router;
