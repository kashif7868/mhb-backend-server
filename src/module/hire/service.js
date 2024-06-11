const httpStatus = require("http-status");
const ApiError = require("../../utils/ApiError");
const Hire = require("./entity/model");

exports.createHire = async (hireData) => {
  const hire = await Hire.create(hireData);
  return hire;
};

exports.getHireById = async (hireId) => {
    const hire = await Hire.findById(hireId)
      .populate({
        path: 'hireDesigner',
        select: 'basicInformation.firstName basicInformation.lastName profilePicture',
      })
      .select('note hireDesigner createdAt');
  
    if (!hire) {
      throw new ApiError(httpStatus.NOT_FOUND, "Hire message not found");
    }
  
    return hire;
  };

exports.updateHire = async (hireId, updateData) => {
  const hire = await Hire.findByIdAndUpdate(hireId, updateData, {
    new: true,
    runValidators: true,
  });
  if (!hire) {
    throw new ApiError(httpStatus.NOT_FOUND, "Hire message not found");
  }
  return hire;
};

exports.deleteHire = async (hireId) => {
  const hire = await Hire.findByIdAndDelete(hireId);
  if (!hire) {
    throw new ApiError(httpStatus.NOT_FOUND, "Hire message not found");
  }
  return hire;
};

exports.getAllHires = async () => {
  const hires = await Hire.find().populate("designer hireDesigner");
  return hires;
};
