const httpStatus = require("http-status");
const ApiError = require("../../utils/ApiError");
const Designer = require("./entity/model");
const Work = require("../work/entity/model");
exports.createDesigner = async (designerData) => {
  const designer = await Designer.create(designerData);
  return designer;
};

exports.getDesignerById = async (designerId) => {
  const designer = await Designer.findById(designerId)
    .populate({
      path: 'user',
      select: '_id profilePicture firstName lastName'
    });

  if (!designer) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Designer not found');
  }

  const response = {
    user: {
      _id: designer.user._id,
      profilePicture: designer.profilePicture,
      firstName: designer.basicInformation.firstName,
      lastName: designer.basicInformation.lastName,
      categoryName: designer.basicInformation.categoryName,
      country: designer.basicInformation.country,
      city: designer.basicInformation.city,
    }
  };

  return response;
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

exports.getAllDesignersWithWorks = async () => {
  const designers = await Designer.find().populate('user');
  const designersWithWorks = await Promise.all(
      designers.map(async (designer) => {
          const works = await Work.find({ designer: designer._id });
          const formattedWorks = works.map((work) => ({
              image: work.image // Adjust this according to your schema
          }));
          return {
              _id: designer._id,
              profilePicture: designer.profilePicture,
              basicInformation: {
                  firstName: designer.user.firstName,
                  lastName: designer.user.lastName,
                  country: designer.basicInformation.country,
                  // Add other basic information fields here
              },
              works: formattedWorks
          };
      })
  );
  return designersWithWorks;
};
