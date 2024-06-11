const mongoose = require("mongoose");
const { toJSON, paginate } = require('../../../utils/plugins');
const config = require("../../../config/config");

const updateSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
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

const Update = mongoose.model("Update", updateSchema);

module.exports = Update;
