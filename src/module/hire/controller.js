const httpStatus = require("http-status");
const catchAsync = require("../../utils/catchAsync");
const hireService = require("./service");

exports.createHire = catchAsync(async (req, res) => {
  const hire = await hireService.createHire(req.body);
  res.status(httpStatus.CREATED).send(hire);
});

exports.getHireById = catchAsync(async (req, res) => {
  const { hireId } = req.params;
  const hire = await hireService.getHireById(hireId);
  res.send(hire);
});

exports.updateHire = catchAsync(async (req, res) => {
  const { hireId } = req.params;
  const updatedHire = await hireService.updateHire(hireId, req.body);
  res.send(updatedHire);
});

exports.deleteHire = catchAsync(async (req, res) => {
  const { hireId } = req.params;
  const deletedHire = await hireService.deleteHire(hireId);
  res.send(deletedHire);
});

exports.getAllHires = catchAsync(async (req, res) => {
  const hires = await hireService.getAllHires();
  res.status(httpStatus.OK).json(hires);
});
