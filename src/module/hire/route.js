const express = require("express");
const validate = require("../../middlewares/validate");
const controller = require("./controller");
const validation = require("./validation");

const router = express.Router();

router
  .route("/")
  .post(validate(validation.createHire), controller.createHire)
  .get(controller.getAllHires);

router
  .route("/:hireId")
  .get(validate(validation.getHire), controller.getHireById)
  .patch(validate(validation.updateHire), controller.updateHire)
  .delete(validate(validation.deleteHire), controller.deleteHire);

module.exports = {
  hireRoutes: router,
};
