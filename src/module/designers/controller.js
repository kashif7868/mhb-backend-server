const httpStatus = require("http-status");
const catchAsync = require("../../utils/catchAsync");
const designerService = require("./service");

exports.createDesigner = catchAsync(async (req, res) => {
  const { body } = req;
  if (req.file) {
    body.profilePicture = req.file.filename;
  }
  const designer = await designerService.createDesigner(body);
  res.status(httpStatus.CREATED).send(designer);
});

exports.getDesignerById = catchAsync(async (req, res) => {
  const { designerId } = req.params;
  const designer = await designerService.getDesignerById(designerId);
  res.send(designer);
});

exports.updateDesigner = catchAsync(async (req, res) => {
  const { designerId } = req.params;
  const updatedDesigner = await designerService.updateDesigner(
    designerId,
    req.body
  );
  res.send(updatedDesigner);
});

exports.deleteDesigner = catchAsync(async (req, res) => {
  const { designerId } = req.params;
  const deletedDesigner = await designerService.deleteDesigner(designerId);
  res.send(deletedDesigner);
});

exports.getAllDesignersWithWorks = catchAsync(async (req, res) => {
  const designers = await designerService.getAllDesignersWithWorks();
  res.status(httpStatus.OK).json(designers);
});
