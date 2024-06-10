const Joi = require("joi");

exports.createHireDesigner = {
  body: Joi.object().keys({
    user: Joi.string().required(),
    profilePicture: Joi.string(),
    basicInformation: Joi.object().keys({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      companyName: Joi.string().required(),
      country: Joi.string().required(),
      city: Joi.string().required(),
      portfolioUrl: Joi.string().required(),
    }).required(),
    onTheWeb: Joi.object().keys({
      facebookUsername: Joi.string().allow(""),
      linkedinUsername: Joi.string().allow(""),
      githubUsername: Joi.string().allow(""),
    }),
  }),
};

exports.getHireDesigner = {
  params: Joi.object().keys({
    hireDesignerId: Joi.string().required(),
  }),
};

exports.updateHireDesigner = {
  params: Joi.object().keys({
    hireDesignerId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    user: Joi.string(),
    profilePicture: Joi.string(),
    basicInformation: Joi.object().keys({
      firstName: Joi.string(),
      lastName: Joi.string(),
      companyName: Joi.string(),
      country: Joi.string(),
      city: Joi.string(),
      portfolioUrl: Joi.string(),
    }),
    onTheWeb: Joi.object().keys({
      facebookUsername: Joi.string().allow(""),
      linkedinUsername: Joi.string().allow(""),
      githubUsername: Joi.string().allow(""),
    }),
  }),
};

exports.deleteHireDesigner = {
  params: Joi.object().keys({
    hireDesignerId: Joi.string().required(),
  }),
};
