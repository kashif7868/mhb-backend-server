const SmallCategory = require('./entity/model');

// Create SmallCategory
exports.createSmallCategory = async (data) => {
  return await SmallCategory.create(data);
};

// Get all SmallCategories
exports.getSmallCategories = async () => {
  return await SmallCategory.find();
};

// Get SmallCategory by ID
exports.getSmallCategoryById = async (id) => {
  return await SmallCategory.findById(id);
};

// Update SmallCategory
exports.updateSmallCategory = async (id, data) => {
  return await SmallCategory.findByIdAndUpdate(id, data, { new: true });
};

// Delete SmallCategory
exports.deleteSmallCategory = async (id) => {
  return await SmallCategory.findByIdAndDelete(id);
};
