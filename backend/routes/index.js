const { Router } = require("express");
const { documentCheck, dataCheck, tokenCheck } = require("../middleware");

const calcRoutes = require("./calc.routes");
const testRoutes = require("./test.routes");

const router = Router();

router.use("/calc", calcRoutes);
router.use("/test", testRoutes);

module.exports = router;
