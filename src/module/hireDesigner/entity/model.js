const mongoose = require("mongoose");
const { toJSON, paginate } = require("../../../utils/plugins");
const config = require("../../../config/config");

const hireDesignerSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    profilePicture: {
      type: String,
      required: true,
    },
    basicInformation: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      companyName: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      portfolioUrl: {
        type: String,
        required: true,
      },
    },
    onTheWeb: {
      facebookUsername: {
        type: String,
      },
      linkedinUsername: {
        type: String,
      },
      githubUsername: {
        type: String,
      },
    },
  },
  {
    toJSON: {
        transform(doc, ret) {
          // ret.id = ret._id;
          // delete ret._id;
          // delete ret.__v;
          // delete ret.updatedAt;
          if (ret.profilePicture) {
            ret.profilePicture = config.rootPath + ret.profilePicture;
          }
        },
      },
  }
);

hireDesignerSchema.plugin(toJSON);
hireDesignerSchema.plugin(paginate);

const HireDesigner = mongoose.model("HireDesigner", hireDesignerSchema);

module.exports = HireDesigner;
