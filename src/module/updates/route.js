const express = require("express");
const validate = require("../../middlewares/validate");
const updateValidation = require("./validation");
const updateController = require("./controller");
const { fileUpload } = require('../../utils/fileUpload');

const router = express.Router();

router
  .route("/")
  .post(fileUpload.single('image'),validate(updateValidation.createUpdate), updateController.createUpdate)
  .get(updateController.getAllUpdates);

router
  .route("/:updateId")
  .get(validate(updateValidation.getUpdate),updateController.getUpdateById)
  .patch(fileUpload.single('image'),validate(updateValidation.updateUpdate), updateController.updateUpdate)
  .delete(validate(updateValidation.deleteUpdate),updateController.deleteUpdate);

module.exports = {
  updateRoutes: router,
};
