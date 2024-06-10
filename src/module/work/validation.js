const Joi = require("joi");

exports.createWork = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    category: Joi.string().required(),
    designer: Joi.string().required(),
  }),
};

exports.getWork = {
  params: Joi.object().keys({
    workId: Joi.string().required(),
  }),
};

exports.updateWork = {
  params: Joi.object().keys({
    workId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    title: Joi.string(),
    category: Joi.string(),
    designer: Joi.string(),
  }),
};

exports.deleteWork = {
  params: Joi.object().keys({
    workId: Joi.string().required(),
  }),
};

exports.getWorksByDesignerId = {
  params: Joi.object().keys({
    designerId: Joi.string().required(),
  }),
};
