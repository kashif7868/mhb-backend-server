const httpStatus = require("http-status");
const catchAsync = require("../../utils/catchAsync");
const updateService = require("./service");

const createUpdate = catchAsync(async (req, res) => {
    const { body } = req;
  if (req.file) {
    body.image = req.file.filename;
  }
  const update = await updateService.createUpdate(body);
  res.status(httpStatus.CREATED).send(update);
});

const getUpdateById = catchAsync(async (req, res) => {
  const update = await updateService.getUpdateById(req.params.updateId);
  res.status(httpStatus.OK).send(update);
});

const getAllUpdates = catchAsync(async (req, res) => {
  const updates = await updateService.getAllUpdates();
  res.status(httpStatus.OK).send(updates);
});

const updateUpdate = catchAsync(async (req, res) => {
  const update = await updateService.updateUpdate(req.params.updateId, req.body);
  res.status(httpStatus.OK).send(update);
});

const deleteUpdate = catchAsync(async (req, res) => {
  await updateService.deleteUpdate(req.params.updateId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createUpdate,
  getUpdateById,
  getAllUpdates,
  updateUpdate,
  deleteUpdate,
};
