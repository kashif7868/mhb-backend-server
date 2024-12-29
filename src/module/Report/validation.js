const Joi = require('joi');

// Validation schema for report update
const updateReportSchema = Joi.object({
  totalOrders: Joi.number().optional(),
  totalCompletedOrders: Joi.number().optional(),
  totalPendingOrders: Joi.number().optional(),
  sales: Joi.object({
    weekly: Joi.number().optional(),
    monthly: Joi.number().optional(),
    yearly: Joi.number().optional(),
  }).optional(),
  orders: Joi.object({
    weekly: Joi.number().optional(),
    monthly: Joi.number().optional(),
    yearly: Joi.number().optional(),
  }).optional(),
  totalUsers: Joi.number().optional(),
  overallIncome: Joi.number().optional(),
  targetGoal: Joi.number().optional(),
  progressToGoal: Joi.number().optional(),
});

const validateUpdate = (req, res, next) => {
  const { error } = updateReportSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: 'Validation error', details: error.details });
  }
  next();
};

module.exports = {
  validateUpdate,
};
