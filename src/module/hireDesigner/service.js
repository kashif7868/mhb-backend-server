const httpStatus = require("http-status");
const ApiError = require("../../utils/ApiError");
const HireDesigner = require("./entity/model");

exports.createHireDesigner = async (hireDesignerData) => {
  const hireDesigner = await HireDesigner.create(hireDesignerData);
  return hireDesigner;
};

exports.getHireDesignerById = async (hireDesignerId) => {
  const hireDesigner = await HireDesigner.findById(hireDesignerId).populate('user', 'profilePicture firstName lastName');
  if (!hireDesigner) {
    throw new ApiError(httpStatus.NOT_FOUND, "Hire Designer not found");
  }
  return hireDesigner;
};

exports.updateHireDesigner = async (hireDesignerId, updatedHireDesignerData) => {
  const hireDesigner = await HireDesigner.findByIdAndUpdate(hireDesignerId, updatedHireDesignerData, {
    new: true,
    runValidators: true,
  });
  if (!hireDesigner) {
    throw new ApiError(httpStatus.NOT_FOUND, "Hire Designer not found");
  }
  return hireDesigner;
};

exports.deleteHireDesigner = async (hireDesignerId) => {
  const hireDesigner = await HireDesigner.findByIdAndDelete(hireDesignerId);
  if (!hireDesigner) {
    throw new ApiError(httpStatus.NOT_FOUND, "Hire Designer not found");
  }
  return hireDesigner;
};

exports.getAllHireDesigners = async () => {
  const hireDesigners = await HireDesigner.find().populate('user', 'profilePicture firstName lastName');
  return hireDesigners;
};
