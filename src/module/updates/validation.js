const Joi = require("joi");

const createUpdate = {
  body: Joi.object().keys({
    image: Joi.string(),
    title: Joi.string().required(),
    message: Joi.string().required(),
  }),
};

const getUpdate = {
  params: Joi.object().keys({
    updateId: Joi.string().required(),
  }),
};

const updateUpdate = {
  params: Joi.object().keys({
    updateId: Joi.string().required(),
  }),
  body: Joi.object().keys({
    image: Joi.string().optional(),
    title: Joi.string().optional(),
    message: Joi.string().optional(),
  }).min(1),
};

const deleteUpdate = {
  params: Joi.object().keys({
    updateId: Joi.string().required(),
  }),
};

module.exports = {
  createUpdate,
  getUpdate,
  updateUpdate,
  deleteUpdate,
};
