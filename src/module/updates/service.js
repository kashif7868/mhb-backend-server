const Update = require("./entity/model");
const ApiError = require("../../utils/ApiError");
const httpStatus = require("http-status");

const createUpdate = async (updateData) => {
  const update = await Update.create(updateData);
  return update;
};

const getUpdateById = async (updateId) => {
  const update = await Update.findById(updateId);
  if (!update) {
    throw new ApiError(httpStatus.NOT_FOUND, "Update not found");
  }
  return update;
};

const getAllUpdates = async () => {
  const updates = await Update.find();
  return updates;
};

const updateUpdate = async (updateId, updateData) => {
  const update = await Update.findByIdAndUpdate(updateId, updateData, {
    new: true,
    runValidators: true,
  });
  if (!update) {
    throw new ApiError(httpStatus.NOT_FOUND, "Update not found");
  }
  return update;
};

const deleteUpdate = async (updateId) => {
  const update = await Update.findByIdAndDelete(updateId);
  if (!update) {
    throw new ApiError(httpStatus.NOT_FOUND, "Update not found");
  }
  return update;
};

module.exports = {
  createUpdate,
  getUpdateById,
  getAllUpdates,
  updateUpdate,
  deleteUpdate,
};
