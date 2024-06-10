const express = require("express");
const validate = require("../../middlewares/validate");
const controller = require("./controller");
const validation = require("./validation");
const { fileUpload } = require("../../utils/fileUpload");

const router = express.Router();

router
  .route("/")
  .post(
    fileUpload.single("image"),
    validate(validation.createCoverImage),
    controller.createCoverImage
  )
  .get(controller.getAllCoverImages);

router
  .route("/:coverImageId")
  .get(validate(validation.getCoverImage), controller.getCoverImageById)
  .patch(
    fileUpload.single("image"),
    validate(validation.updateCoverImage),
    controller.updateCoverImage
  )
  .delete(validate(validation.deleteCoverImage), controller.deleteCoverImage);

module.exports = {
  coverImageRoutes: router,
};
