const Joi = require('joi');

const basicInformationSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  categoryName: Joi.string().required(),
  country: Joi.string().required(),
  city: Joi.string().required(),
  portfolioUrl: Joi.string().required(),
});

const onTheWebSchema = Joi.object({
  facebookUsername: Joi.string().required(),
  linkedinUsername: Joi.string().required(),
  githubUsername: Joi.string().required(),
});

const aboutMeSchema = Joi.object({
  sectionTitle: Joi.string().required(),
  description: Joi.string().required(),
  companyName: Joi.string().required(),
  position: Joi.string().required(),
  startingFrom: Joi.date().required(),
  endingIn: Joi.date().required(),
  details: Joi.string().required(),
});

exports.createDesigner = {
  body: Joi.object().keys({
    user: Joi.string().required(),
    profilePicture: Joi.string(),
    basicInformation: basicInformationSchema,
    onTheWeb: onTheWebSchema,
    aboutMe: aboutMeSchema,
  }),
};

exports.getDesigner = {
  params: Joi.object().keys({
    designerId: Joi.string().required(),
  }),
};

exports.updateDesigner = {
  params: Joi.object().keys({
    designerId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    user: Joi.string(),
    profilePicture: Joi.string(),
    basicInformation: basicInformationSchema,
    onTheWeb: onTheWebSchema,
    aboutMe: aboutMeSchema,
  }),
};

exports.deleteDesigner = {
  params: Joi.object().keys({
    designerId: Joi.string().required(),
  }),
};
