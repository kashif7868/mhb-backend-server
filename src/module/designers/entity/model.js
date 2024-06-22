const mongoose = require('mongoose');
const { toJSON, paginate } = require('../../../utils/plugins');
const config = require("../../../config/config");

const designerSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
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
      categoryName: {
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
        required: true,
      },
      linkedinUsername: {
        type: String,
        required: true,
      },
      githubUsername: {
        type: String,
        required: true,
      },
    },
    aboutMe: {
      sectionTitle: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      }
    },
    workExperience:{
      companyName: {
        type: String,
      },
      position: {
        type: String,
      },
      startingFrom: {
        type: Date,
      },
      endingIn: {
        type: Date,
      },
      details: {
        type: String,
      }
    }
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
    timestamps: true,
  }
);

designerSchema.plugin(toJSON);
designerSchema.plugin(paginate);

const Designer = mongoose.model('Designer', designerSchema);

module.exports = Designer;
