const { Schema, model } = require("mongoose");

const CalcDataSchema = new Schema(
  {
    Stage: {
      type: Number,
    },
    ["Surveyors Valuation"]: {
      type: Number,
    },
    ["Purchase Price"]: {
      type: Number,
    },
    ["Buying Survey"]: {
      type: Number,
    },
    ["Sourcing Fee"]: {
      type: Number,
    },
    ["Insurance"]: {
      type: Number,
    },
    ["SDLT"]: {
      type: Number,
    },
    ["Buyers Solicitor"]: {
      type: Number,
    },
    ["Planning/Architect (Borrowed)"]: {
      type: Number,
    },
    ["Additional Legals"]: {
      type: Number,
    },
    ["Money at Exchange"]: {
      type: Number,
    },
    ["Sourced Solicitor Fee"]: {
      type: Number,
    },
    ["Build"]: {
      type: Number,
    },
    ["Project Manager (usually 10%)"]: {
      type: Number,
    },
    ["CIL/S106"]: {
      type: Number,
    },
    ["Planning/Architect (Costs during the project)"]: {
      type: Number,
    },
    ["Legals during project"]: {
      type: Number,
    },
    ["Drawdown Surveys"]: {
      type: Number,
    },
    ["Warranty"]: {
      type: Number,
    },
    ["Landscaping"]: {
      type: Number,
    },
    ["Site road/1st stage"]: {
      type: Number,
    },
    ["P2P interest rate"]: {
      type: Number,
    },
    ["Term (months)"]: {
      type: Number,
    },
    ["Rate on investors money"]: {
      type: Number,
    },
    ["Sale cost"]: {
      type: Number,
    },
    ["legals-sale"]: {
      type: Number,
    },
    ["Unit 1"]: {
      type: Number,
    },
    ["Unit 2"]: {
      type: Number,
    },
    ["Unit 3"]: {
      type: Number,
    },
    ["Unit 4"]: {
      type: Number,
    },
    ["Unit 5"]: {
      type: Number,
    },
    ["Unit 6"]: {
      type: Number,
    },
    ["Unit 7"]: {
      type: Number,
    },
    ["Unit 8"]: {
      type: Number,
    },
    ["Unit 9"]: {
      type: Number,
    },
    ["Unit 10"]: {
      type: Number,
    },
    ["Unit 11"]: {
      type: Number,
    },
    ["Borrower equity"]: {
      type: Number,
    },
    ["Money (Money from an investor)"]: {
      type: Number,
    },
    ["Lettings Fee (10%)"]: {
      type: Number,
    },
    ["Insurance"]: {
      type: Number,
    },
    ["Lending @ 4% or Rent"]: {
      type: Number,
    },
    ["Gas and Electric"]: {
      type: Number,
    },
    ["Water"]: {
      type: Number,
    },
    ["Council Tax"]: {
      type: Number,
    },
    ["Cleaner"]: {
      type: Number,
    },
    ["Gardener"]: {
      type: Number,
    },
    ["Broadband"]: {
      type: Number,
    },
    ["Service Charge"]: {
      type: Number,
    },
    ["Unit/Room 1"]: {
      type: Number,
    },
    ["Unit/Room 2"]: {
      type: Number,
    },
    ["Unit/Room 3"]: {
      type: Number,
    },
    ["Unit/Room 4"]: {
      type: Number,
    },
    ["Unit/Room 5"]: {
      type: Number,
    },
    ["Unit/Room 6"]: {
      type: Number,
    },
    ["Unit/Room 7"]: {
      type: Number,
    },
    ["Unit/Room 8"]: {
      type: Number,
    },
    ["Unit/Room 9"]: {
      type: Number,
    },
    ["Unit/Room 10"]: {
      type: Number,
    },
  },
  {
    collection: "data_calc",
  }
);

CalcDataSchema.virtual("2% P2P loan fee").get(function () {
  return this["Total P2P Loan"] * 0.2;
});

CalcDataSchema.virtual("Total (Borrowed)").get(function () {
  return (
    this["Buying Survey"] +
    this["Sourcing Fee"] +
    this["Insurance"] +
    this["2% P2P loan fee"] +
    this["SDLT"] +
    this["Buyers Solicitor"] +
    this["Planning/Architect (Borrowed)"] +
    this["Additional Legals"] +
    this["Money at Exchange"] +
    this["Sourced Solicitor Fee"]
  );
});

CalcDataSchema.virtual("Contingency (10%)").get(function () {
  return this["Build"] * 0.1;
});

CalcDataSchema.virtual("Costs pre end sale").get(function () {
  return (
    this["Build"] +
    this["Contingency (10%)"] +
    this["Project Manager (usually 10%)"] +
    this["CIL/S106"] +
    this["Planning/Architect (Costs during the project)"] +
    this["Legals during project"] +
    this["Drawdown Surveys"] +
    this["Warranty"] +
    this["Landscaping"] +
    this["Site road/1st stage"]
  );
});

CalcDataSchema.virtual("P2P Investor Interest").get(function () {
  return (
    this["Total P2P Loan"] *
    (this["P2P interest rate"] * (this["Term (months)"] / 12))
  );
});

CalcDataSchema.virtual("3% P2P loan fee").get(function () {
  return this["Total P2P Loan"] * 0.03;
});

CalcDataSchema.virtual("Interest for investor").get(function () {
  return (
    this["Money (Money from an investor)"] * this["Rate on investors money"]
  );
});

CalcDataSchema.virtual("Pay back investor capital").get(function () {
  return this["Money (Money from an investor)"];
});

CalcDataSchema.virtual("Costs after sale").get(function () {
  return (
    this["P2P Investor Interest"] +
    this["3% P2P loan fee"] +
    this["Interest for investor"] +
    this["Pay back investor capital"] +
    this["Sale cost"] +
    this["legals-sale"]
  );
});

CalcDataSchema.virtual("Total (Sales)").get(function () {
  return (
    this["Unit 1"] +
    this["Unit 2"] +
    this["Unit 3"] +
    this["Unit 4"] +
    this["Unit 5"] +
    this["Unit 6"] +
    this["Unit 7"] +
    this["Unit 8"] +
    this["Unit 9"] +
    this["Unit 10"] +
    this["Unit 11"]
  );
});

CalcDataSchema.virtual("Total stressed -10% (Sales)").get(function () {
  return this["Total (Sales)"] * 0.9;
});

CalcDataSchema.virtual("Total stressed -20% (Sales)").get(function () {
  return this["Total (Sales)"] * 0.8;
});

CalcDataSchema.virtual("70% of GDV is").get(function () {
  return this["Total (Sales)"] * 0.7;
});

CalcDataSchema.virtual("Your Total Loan").get(function () {
  return this["Purchase Price"] + this["Costs pre end sale"];
});

CalcDataSchema.virtual("Purchase costs").get(function () {
  return this["Total (Borrowed)"];
});

CalcDataSchema.virtual("Valuation - PP").get(function () {
  return this["Surveyors Valuation"] - this["Purchase Price"];
});

CalcDataSchema.virtual("Total (Cash you put in)").get(function () {
  return (
    this["Purchase costs"] + this["Valuation - PP"] + this["Borrower equity"]
  );
});

CalcDataSchema.virtual("Total P2P Loan").get(function () {
  return (
    this["Your Total Loan"] -
    this["Borrower equity"] -
    this["Money (Money from an investor)"]
  );
});

CalcDataSchema.virtual("You are short by").get(function () {
  return this["Total P2P Loan"] - this["70% of GDV is"] < 0
    ? 0
    : this["Total P2P Loan"] - this["70% of GDV is"];
});

CalcDataSchema.virtual("Profit on sale (Metrix Stage 1)").get(function () {
  return (
    this["Total (Sales)"] -
    this["Costs after sale"] -
    this["Costs pre end sale"] -
    this["Total (Borrowed)"] -
    this["Purchase Price"]
  );
});

CalcDataSchema.virtual("ROCE (Metrix Stage 1)").get(function () {
  return (
    this["Profit on sale (Metrix Stage 1)"] / this["Total (Cash you put in)"]
  );
});

CalcDataSchema.virtual("ROI (Metrix Stage 1)").get(function () {
  return (
    this["Profit on sale (Metrix Stage 1)"] /
    (this["Purchase Price"] +
      this["Total (Borrowed)"] +
      this["Costs pre end sale"] +
      this["Costs after sale"])
  );
});

CalcDataSchema.virtual("Profit (Metrix Stage 1)").get(function () {
  return this["Profit on sale (Metrix Stage 1)"] / this["Total (Sales)"];
});

CalcDataSchema.virtual("Loan to purchase").get(function () {
  return (
    (this["Purchase Price"] - ["Borrower equity"]) / this["Purchase Price"]
  );
});

CalcDataSchema.virtual("Loan to costs").get(function () {
  return (
    this["Total P2P Loan"] /
    (this["Total (Borrowed)"] +
      this["Purchase Price"] +
      this["Costs pre end sale"])
  );
});

CalcDataSchema.virtual("Loan to GDV").get(function () {
  return this["Total P2P Loan"] / this["Total (Sales)"];
});

CalcDataSchema.virtual("Borrower equity as % of valuation").get(function () {
  return (
    (this["Valuation - PP"] + this["Borrower equity"]) /
    this["Surveyors Valuation"]
  );
});

CalcDataSchema.virtual("Total invested by borrower").get(function () {
  return this["Total (Cash you put in)"];
});

CalcDataSchema.virtual("Profit on sale (Metrix Stage 1, 10%)").get(function () {
  return (
    this["Total stressed -10% (Sales)"] -
    this["Costs after sale"] -
    this["Costs pre end sale"] -
    this["Total (Borrowed)"] -
    this["Purchase Price"]
  );
});

CalcDataSchema.virtual("ROCE % (Metrix Stage 1, 10%)").get(function () {
  return (
    this["Profit on sale (Metrix Stage 1, 10%)"] /
    this["Total (Cash you put in)"]
  );
});

// Why are sum there?

CalcDataSchema.virtual("ROI % (Metrix Stage 1, 10%)").get(function () {
  return (
    this["Profit on sale (Metrix Stage 1, 10%)"] /
    (this["Purchase Price"] +
      this["Total (Borrowed)"] +
      this["Costs pre end sale"] +
      this["Costs after sale"])
  );
});

CalcDataSchema.virtual("Profit %, (Metrix Stage 1, 10%)").get(function () {
  return this["Profit on sale (Metrix Stage 1, 10%)"] / this["Total (Sales)"];
});

CalcDataSchema.virtual("Loan to GDV % (Metrix Stage 1, 10%)").get(function () {
  return this["Total P2P Loan"] / this["Total stressed -10% (Sales)"];
});

CalcDataSchema.virtual("Profit on sale (Metrix Stage 1, 20%)").get(function () {
  return (
    this["Total stressed -20% (Sales)"] -
    this["Costs after sale"] -
    this["Costs pre end sale"] -
    this["Total (Borrowed)"] -
    this["Purchase Price"]
  );
});

CalcDataSchema.virtual("ROCE % (Metrix Stage 1, 20%)").get(function () {
  return (
    this["Profit on sale (Metrix Stage 1, 20%)"] /
    this["Total (Cash you put in)"]
  );
});

CalcDataSchema.virtual("ROI % (Metrix Stage 1, 20%)").get(function () {
  return (
    this["Profit on sale (Metrix Stage 1, 20%)"] /
    (this["Purchase Price"] +
      this["Total (Borrowed)"] +
      this["Costs pre end sale"] +
      this["Costs after sale"])
  );
});

CalcDataSchema.virtual("Profit % (Metrix Stage 1, 20%)").get(function () {
  return this["Profit on sale (Metrix Stage 1, 20%)"] / this["Total (Sales)"];
});

CalcDataSchema.virtual("Loan to GDV % (Metrix Stage 1, 20%)").get(function () {
  return this["Total P2P Loan"] / this["Total stressed -20% (Sales)"];
});

//

CalcDataSchema.virtual("Value (Refinance)").get(function () {
  return this["Total (Sales)"];
});

CalcDataSchema.virtual("Costs plus borrower equity").get(function () {
  return (
    this["Total (Cash you put in)"] +
    this["Costs pre end sale"] +
    this["Costs after sale"] +
    this["Purchase Price"]
  );
});

CalcDataSchema.virtual("Mortgage @ 75%").get(function () {
  return this["Value (Refinance)"] * 0.75;
});

CalcDataSchema.virtual("After you refinance this is left in, if red").get(
  function () {
    return this["Mortgage @ 75%"] - this["Costs plus borrower equity"];
  }
);

CalcDataSchema.virtual("Monthly (Rental costs)").get(function () {
  return (
    this["Lettings Fee (10%)"] +
    this["Insurance"] +
    this["Lending @ 4% or Rent"] +
    this["Gas and Electric"] +
    this["Water"] +
    this["Council Tax"] +
    this["Cleaner"] +
    this["Gardener"] +
    this["Broadband"] +
    this["Service Charge"]
  );
});
CalcDataSchema.virtual("Annually (Rental costs)").get(function () {
  return this["Monthly (Rental costs)"] * 12;
});

CalcDataSchema.virtual("Monthly (Rental Income)").get(function () {
  return (
    this["Unit/Room 1"] +
    this["Unit/Room 2"] +
    this["Unit/Room 3"] +
    this["Unit/Room 4"] +
    this["Unit/Room 5"] +
    this["Unit/Room 6"] +
    this["Unit/Room 7"] +
    this["Unit/Room 8"] +
    this["Unit/Room 9"] +
    this["Unit/Room 10"]
  );
});
CalcDataSchema.virtual("Annually (Rental Income)").get(function () {
  return this["Monthly (Rental Income)"] * 12;
});

CalcDataSchema.virtual("Monthly NET").get(function () {
  return this["Monthly (Rental Income)"] - this["Monthly (Rental costs)"];
});
CalcDataSchema.virtual("Annual NET").get(function () {
  return this["Annually (Rental Income)"] - this["Monthly (Rental costs)"];
});

// error in formula

CalcDataSchema.virtual("Stage 3, Metrics ROCE").get(function () {
  return 0;
});
CalcDataSchema.virtual("Stage 3, Metrics Yield").get(function () {
  return this["Annual NET"] / this["Value (Refinance)"];
});

CalcDataSchema.virtual("Stage 3 2% In").get(function () {
  return this["2% P2P loan fee"];
});
CalcDataSchema.virtual("Stage 3 3% Out").get(function () {
  return this["3% P2P loan fee"];
});
CalcDataSchema.virtual("Stage 3 Total Interest").get(function () {
  return this["P2P Investor Interest"];
});

CalcDataSchema.virtual("Total (Stage 3 Total P2P Costs)").get(function () {
  return this["2% In"] + this["3% Out"] + this["Total Interest"];
});

const CalcDataModel = model("CalcData", CalcDataSchema);

module.exports = CalcDataModel;
