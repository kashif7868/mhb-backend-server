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
    validate(validation.createWork),
    controller.createWork
  )
  .get(controller.getAllWorks);

router
  .route("/:workId")
  .get(validate(validation.getWork), controller.getWorkById)
  .patch(
    fileUpload.single("image"),
    validate(validation.updateWork),
    controller.updateWork
  )
  .delete(validate(validation.deleteWork), controller.deleteWork);

router
  .route("/designer/:designerId")
  .get(
    validate(validation.getWorksByDesignerId),
    controller.getWorksByDesignerId
  );

module.exports = {
  workRoutes: router,
};
