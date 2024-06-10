const httpStatus = require("http-status");
const catchAsync = require("../../utils/catchAsync");
const coverImageService = require("./service");

exports.createCoverImage = catchAsync(async (req, res) => {
  if (req.file) {
    req.body.image = req.file.filename;
  }
  const coverImage = await coverImageService.createCoverImage(req.body);
  res.status(httpStatus.CREATED).send(coverImage);
});

exports.getCoverImageById = catchAsync(async (req, res) => {
  const { coverImageId } = req.params;
  const coverImage = await coverImageService.getCoverImageById(coverImageId);
  res.send(coverImage);
});

exports.updateCoverImage = catchAsync(async (req, res) => {
  const { coverImageId } = req.params;
  if (req.file) {
    req.body.image = req.file.filename;
  }
  const updatedCoverImage = await coverImageService.updateCoverImage(coverImageId, req.body);
  res.send(updatedCoverImage);
});

exports.deleteCoverImage = catchAsync(async (req, res) => {
  const { coverImageId } = req.params;
  const deletedCoverImage = await coverImageService.deleteCoverImage(coverImageId);
  res.send(deletedCoverImage);
});

exports.getAllCoverImages = catchAsync(async (req, res) => {
  const coverImages = await coverImageService.getAllCoverImages();
  res.status(httpStatus.OK).json(coverImages);
});
