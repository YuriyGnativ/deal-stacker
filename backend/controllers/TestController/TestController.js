const { TestModel } = require("../../models");
const jwt = require("jsonwebtoken");

class TestController {
  create = async (req, res, next) => {
    try {
      const test = await TestModel.create({
        sub: {
          subFieldOne: { value: "15" },
          subFieldTwo: 10,
          subFieldThree: "sdasd",
        },
      });

      console.log("test", test.test);
      res.json({ test });
      // res.send("test");
    } catch (error) {
      res.status(403).json({
        status: "error",
        message: "failed to create",
        error,
      });
    }
  };

  update = async (req, res, next) => {
    const { id } = req.body;
    const updated = await TestModel.findByIdAndUpdate(
      id,
      {
        sub: {
          subFieldOne: { value: "asd" },
        },
      },
      {
        returnOriginal: true,
      }
    );
    res.json({
      updated,
    });
  };
  remove = async (req, res, next) => {
    res.send("remove");
  };
  sync = async (req, res, next) => {
    res.send("sync");
  };
}

module.exports = new TestController();
