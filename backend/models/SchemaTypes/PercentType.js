const mongoose = require("mongoose");

class Percent extends mongoose.SchemaType {
  constructor(key, options) {
    super(key, options, "Percent");
  }
  cast(val) {
    let _val = Number(val);
    if (isNaN(_val)) {
      throw new Error("Percent: " + val + " is not a number");
    }
    _val = Math.round(_val);
    if (_val < -0x80 || _val > 0x7f) {
      throw new Error(
        "Percent: " + val + " is outside of the range of valid 8-bit ints"
      );
    }
    return _val;
  }
}

mongoose.Schema.Types.Percent = Percent;

module.exports = Percent;
