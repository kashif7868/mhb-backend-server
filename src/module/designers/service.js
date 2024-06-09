const httpStatus = require("http-status");
const ApiError = require("../../utils/ApiError");
const Designer = require("./entity/model");

exports.createDesigner = async (designerData) => {
  const designer = await Designer.create(designerData);
  return designer;
};

exports.getDesignerById = async (designerId) => {
  const designer = await Designer.findById(designerId).populate("user");
  if (!designer) {
    throw new ApiError(httpStatus.NOT_FOUND, "Designer not found");
  }
  return designer;
};

exports.updateDesigner = async (designerId, updatedDesignerData) => {
  const designer = await Designer.findByIdAndUpdate(
    designerId,
    updatedDesignerData,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!designer) {
    throw new ApiError(httpStatus.NOT_FOUND, "Designer not found");
  }
  return designer;
};

exports.deleteDesigner = async (designerId) => {
  const designer = await Designer.findByIdAndDelete(designerId);
  if (!designer) {
    throw new ApiError(httpStatus.NOT_FOUND, "Designer not found");
  }
  return designer;
};

exports.getAllDesigners = async () => {
  const designers = await Designer.find().populate("user");
  return designers;
};
