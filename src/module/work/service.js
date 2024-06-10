const httpStatus = require("http-status");
const ApiError = require("../../utils/ApiError");
const Work = require("./entity/model");

exports.createWork = async (workData) => {
  const work = await Work.create(workData);
  return work.populate('designer');
};

exports.getWorkById = async (workId) => {
  const work = await Work.findById(workId).populate({
    path: 'designer',
    select: 'profilePicture firstName lastName categoryName country city'
  });
  if (!work) {
    throw new ApiError(httpStatus.NOT_FOUND, "Work not found");
  }
  return work;
};

exports.updateWork = async (workId, updatedWorkData) => {
  const work = await Work.findByIdAndUpdate(workId, updatedWorkData, {
    new: true,
    runValidators: true,
  });
  if (!work) {
    throw new ApiError(httpStatus.NOT_FOUND, "Work not found");
  }
  return work;
};

exports.deleteWork = async (workId) => {
  const work = await Work.findByIdAndDelete(workId);
  if (!work) {
    throw new ApiError(httpStatus.NOT_FOUND, "Work not found");
  }
  return work;
};

exports.getAllWorks = async () => {
    const works = await Work.find()
      .select('title image designer')
      .populate({
        path: 'designer',
        select: 'profilePicture basicInformation.firstName basicInformation.lastName'
      });
    return works;
  };
  

exports.getWorksByDesignerId = async (designerId) => {
  const works = await Work.find({ designer: designerId }).populate({
    path: 'designer',
    select: 'profilePicture firstName lastName categoryName country city'
  });
  return works;
};


  