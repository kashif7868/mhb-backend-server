const Joi = require("joi");

exports.createCoverImage = {
  body: Joi.object().keys({
    user: Joi.string().required(),
    image: Joi.string(),
  }),
};

exports.getCoverImage = {
  params: Joi.object().keys({
    coverImageId: Joi.string().required(),
  }),
};

exports.updateCoverImage = {
  params: Joi.object().keys({
    coverImageId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    image: Joi.string(),
  }),
};

exports.deleteCoverImage = {
  params: Joi.object().keys({
    coverImageId: Joi.string().required(),
  }),
};
