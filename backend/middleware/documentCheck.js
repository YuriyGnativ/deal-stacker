const { CalcDataModel } = require("../models");

const documentCheck = async (req, res, next) => {
  console.log("doc check");
  const { id } = res.locals;

  try {
    console.log(res.locals);

    await CalcDataModel.findById(id).orFail();
    next();
  } catch (error) {
    console.log("err");

    res.status(410).json({
      status: "error",
      message: "Can't find document with such id...",
      error,
    });
  }
};

module.exports = documentCheck;
