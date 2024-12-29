const Joi = require('joi');

const addItemValidation = Joi.object({
  productId: Joi.string().required(),
  qty: Joi.number().min(1).required(),
  selectedColor: Joi.string(),
  selectedSize: Joi.string(),
  selectedMeter: Joi.number(),
});

const updateItemValidation = Joi.object({
  productId: Joi.string().required(),
  qty: Joi.number().min(1),
  selectedColor: Joi.string(),
  selectedSize: Joi.string(),
  selectedMeter: Joi.number(),
});

module.exports = {
  addItemValidation,
  updateItemValidation,
};
