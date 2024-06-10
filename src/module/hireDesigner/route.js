const express = require("express");
const validate = require("../../middlewares/validate");
const hireDesignerController = require("./controller");
const hireDesignerValidation = require("./validation");
const { fileUpload } = require('../../utils/fileUpload');
const router = express.Router();

router
  .route("/")
  .post(fileUpload.single('profilePicture'),validate(hireDesignerValidation.createHireDesigner), hireDesignerController.createHireDesigner)
  .get(hireDesignerController.getAllHireDesigners);

router
  .route("/:hireDesignerId")
  .get(validate(hireDesignerValidation.getHireDesigner), hireDesignerController.getHireDesignerById)
  .patch(fileUpload.single('profilePicture'),validate(hireDesignerValidation.updateHireDesigner), hireDesignerController.updateHireDesigner)
  .delete(validate(hireDesignerValidation.deleteHireDesigner), hireDesignerController.deleteHireDesigner);

module.exports = {
  hireDesignerRoutes: router,
};
