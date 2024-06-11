const Joi = require("joi");

exports.createHire = {
  body: Joi.object().keys({
    companyName: Joi.string().required(),
    country: Joi.string().required(),
    phoneNumber: Joi.string().required(),
    location: Joi.string().required(),
    interviewDate: Joi.date().required(),
    note: Joi.string().optional(),
    designer: Joi.string().required(),
    hireDesigner: Joi.string().required(),
  }),
};

exports.getHire = {
  params: Joi.object().keys({
    hireId: Joi.string().required(),
  }),
};

exports.updateHire = {
  params: Joi.object().keys({
    hireId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    companyName: Joi.string(),
    country: Joi.string(),
    phoneNumber: Joi.string(),
    location: Joi.string(),
    interviewDate: Joi.date(),
    note: Joi.string(),
    designer: Joi.string(),
    hireDesigner: Joi.string(),
  }),
};

exports.deleteHire = {
  params: Joi.object().keys({
    hireId: Joi.string().required(),
  }),
};
