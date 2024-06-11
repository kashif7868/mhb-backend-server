const mongoose = require("mongoose");
const { toJSON, paginate } = require("../../../utils/plugins");

const hireSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    interviewDate: {
      type: Date,
      required: true,
    },
    note: {
      type: String,
    },
    designer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Designer",
      required: true,
    },
    hireDesigner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "HireDesigner",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

hireSchema.plugin(toJSON);
hireSchema.plugin(paginate);

const Hire = mongoose.model("Hire", hireSchema);

module.exports = Hire;
