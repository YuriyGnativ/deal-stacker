const { Schema, model } = require("mongoose");

const TestSchema = new Schema({
  sub: new Schema({
    subFieldOne: {
      type: new Schema({
        label: {
          type: String,
          default: "some label",
        },
        value: Number,
      }),
    },
    subFieldTwo: Number,
    subFieldThree: String,
  }),
});

TestSchema.virtual("test").get(function () {
  console.log(this.sub);
  console.log("in virtual", this.sub.subFieldOne.label);
  return 15;
});

const TestModel = model("Test", TestSchema);

module.exports = TestModel;
