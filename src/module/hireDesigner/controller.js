const httpStatus = require("http-status");
const catchAsync = require("../../utils/catchAsync");
const hireDesignerService = require("./service");

exports.createHireDesigner = catchAsync(async (req, res) => {
  const { body } = req;
  if (req.file) {
    body.profilePicture = req.file.filename;
  }
  const hireDesigner = await hireDesignerService.createHireDesigner(body);
  res.status(httpStatus.CREATED).send(hireDesigner);
});

exports.getHireDesignerById = catchAsync(async (req, res) => {
  const hireDesigner = await hireDesignerService.getHireDesignerById(
    req.params.hireDesignerId
  );
  res.send(hireDesigner);
});

exports.updateHireDesigner = catchAsync(async (req, res) => {
  const hireDesigner = await hireDesignerService.updateHireDesigner(
    req.params.hireDesignerId,
    req.body
  );
  res.send(hireDesigner);
});

exports.deleteHireDesigner = catchAsync(async (req, res) => {
  await hireDesignerService.deleteHireDesigner(req.params.hireDesignerId);
  res.status(httpStatus.NO_CONTENT).send();
});

exports.getAllHireDesigners = catchAsync(async (req, res) => {
  const hireDesigners = await hireDesignerService.getAllHireDesigners();
  res.send(hireDesigners);
});
