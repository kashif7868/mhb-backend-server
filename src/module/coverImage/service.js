const httpStatus = require("http-status");
const ApiError = require("../../utils/ApiError");
const CoverImage = require("./entity/model");
const User = require("./../users/entity/model");

exports.createCoverImage = async (coverImageData) => {
  const coverImage = await CoverImage.create(coverImageData);
  return coverImage;
};

exports.getCoverImageById = async (coverImageId) => {
  const coverImage = await CoverImage.findById(coverImageId);
  if (!coverImage) {
    throw new ApiError(httpStatus.NOT_FOUND, "Cover image not found");
  }
  return coverImage;
};

exports.updateCoverImage = async (coverImageId, updateData) => {
  const coverImage = await CoverImage.findByIdAndUpdate(coverImageId, updateData, {
    new: true,
    runValidators: true,
  });
  if (!coverImage) {
    throw new ApiError(httpStatus.NOT_FOUND, "Cover image not found");
  }
  return coverImage;
};

exports.deleteCoverImage = async (coverImageId) => {
  const coverImage = await CoverImage.findByIdAndDelete(coverImageId);
  if (!coverImage) {
    throw new ApiError(httpStatus.NOT_FOUND, "Cover image not found");
  }
  return coverImage;
};

exports.getAllCoverImages = async () => {
  const coverImages = await CoverImage.find().populate({
    path: "user",
    select: "firstName lastName",
    model: User,
  });
  return coverImages;
};
