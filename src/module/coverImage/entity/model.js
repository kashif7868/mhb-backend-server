const mongoose = require("mongoose");
const { toJSON, paginate } = require("../../../utils/plugins");
const config = require("../../../config/config");

const coverImageSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        if (ret.image) {
          ret.image = config.rootPath + ret.image;
        }
      },
    },
    timestamps: true,
  }
);

coverImageSchema.plugin(toJSON);
coverImageSchema.plugin(paginate);

const CoverImage = mongoose.model("CoverImage", coverImageSchema);

module.exports = CoverImage;
