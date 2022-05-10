const { Router } = require("express");
const {
  TestController: { create, update, remove, sync },
} = require("../controllers");
const { documentCheck, dataCheck, tokenCheck } = require("../middleware");

const router = new Router();

router.get("/sync", sync);
router.post("/create", create);
router.put("/update", update);
router.delete("/remove", remove);

module.exports = router;
