const Joi = require('joi');

// Validation for creating SmallCategory
exports.createSmallCategoryValidation = {
  body: Joi.object({
    sub_categoryName: Joi.string().required(),
    small_categoryNames: Joi.array().items(Joi.string()).default([]),
  }),
};

// Validation for updating SmallCategory
exports.updateSmallCategoryValidation = {
  body: Joi.object({
    sub_categoryName: Joi.string(),
    small_categoryNames: Joi.array().items(Joi.string()),
  }),
};
