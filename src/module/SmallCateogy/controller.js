const SmallCategoryService = require('./service');

// Create SmallCategory
exports.createSmallCategory = async (req, res) => {
  try {
    const smallCategory = await SmallCategoryService.createSmallCategory(req.body);
    res.status(201).json(smallCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all SmallCategories
exports.getSmallCategories = async (req, res) => {
  try {
    const smallCategories = await SmallCategoryService.getSmallCategories();
    res.status(200).json(smallCategories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get SmallCategory by ID
exports.getSmallCategoryById = async (req, res) => {
  try {
    const smallCategory = await SmallCategoryService.getSmallCategoryById(req.params.id);
    if (!smallCategory) return res.status(404).json({ error: 'SmallCategory not found' });
    res.status(200).json(smallCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update SmallCategory
exports.updateSmallCategory = async (req, res) => {
  try {
    const smallCategory = await SmallCategoryService.updateSmallCategory(req.params.id, req.body);
    if (!smallCategory) return res.status(404).json({ error: 'SmallCategory not found' });
    res.status(200).json(smallCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete SmallCategory
exports.deleteSmallCategory = async (req, res) => {
  try {
    const deleted = await SmallCategoryService.deleteSmallCategory(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'SmallCategory not found' });
    res.status(200).json({ message: 'SmallCategory deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};