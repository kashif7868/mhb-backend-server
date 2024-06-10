const httpStatus = require("http-status");
const catchAsync = require("../../utils/catchAsync");
const workService = require("./service");

exports.createWork = catchAsync(async (req, res) => {
  const { body } = req;
  if (req.file) {
    body.image = req.file.filename;
  }
  const work = await workService.createWork(body);
  res.status(httpStatus.CREATED).send(work);
});

exports.getWorkById = catchAsync(async (req, res) => {
  const { workId } = req.params;
  const work = await workService.getWorkById(workId);
  res.send(work);
});

exports.updateWork = catchAsync(async (req, res) => {
  const { workId } = req.params;
  const updatedWork = await workService.updateWork(workId, req.body);
  res.send(updatedWork);
});

exports.deleteWork = catchAsync(async (req, res) => {
  const { workId } = req.params;
  const deletedWork = await workService.deleteWork(workId);
  res.send(deletedWork);
});

exports.getAllWorks = catchAsync(async (req, res) => {
  const works = await workService.getAllWorks();
  res.status(httpStatus.OK).json(works);
});

exports.getWorksByDesignerId = catchAsync(async (req, res) => {
  const { designerId } = req.params;
  const works = await workService.getWorksByDesignerId(designerId);
  res.status(httpStatus.OK).json(works);
});
