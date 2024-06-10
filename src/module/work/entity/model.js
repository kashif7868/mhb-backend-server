const mongoose = require("mongoose");
const { toJSON, paginate } = require("../../../utils/plugins");
const config = require("../../../config/config");

const workSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    designer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Designer",
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        // ret.id = ret._id;
        // delete ret._id;
        // delete ret.__v;
        // delete ret.updatedAt;
        if (ret.image) {
          ret.image = config.rootPath + ret.image;
        }
      },
    },
    timestamps: true,
  }
);

workSchema.plugin(toJSON);
workSchema.plugin(paginate);

const Work = mongoose.model("Work", workSchema);

module.exports = Work;
