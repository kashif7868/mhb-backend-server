const mongoose = require('mongoose');
const { toJSON, paginate } = require('../../../utils/plugins');

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
      },
      companyName: {
        type: String,
        required: true,
      },
      position: {
        type: String,
        required: true,
      },
      startingFrom: {
        type: Date,
        required: true,
      },
      endingIn: {
        type: Date,
        required: true,
      },
      details: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

designerSchema.plugin(toJSON);
designerSchema.plugin(paginate);

const Designer = mongoose.model('Designer', designerSchema);

module.exports = Designer;
