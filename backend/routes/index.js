const { Router } = require("express");
const { documentCheck, dataCheck, tokenCheck } = require("../middleware");

const calcRoutes = require("./calc.routes");

const router = Router();

router.use("/calc", calcRoutes);

router.get("/test", documentCheck, (req, res, next) => {
  // req.method = "PUT";
  // res.redirect("/test");
  res.json({
    data: "good",
    status: "success",
  });
});

// router.post("/test", (req, res, next) => {
//   res.send("in put");
// });

// router.get("/test2", (req, res, next) => {
//   res.json({ data: "test2" });
// });

module.exports = router;
