const express = require('express');
const validate = require('../../middlewares/validate');
const controller = require('./controller');
const validation = require('./validation');
const { fileUpload } = require('../../utils/fileUpload'); // Import fileUpload middleware

const router = express.Router();

router
  .route('/')
  .post(
    fileUpload.single('profilePicture'),
    validate(validation.createDesigner),
    controller.createDesigner
  )
  .get(controller.getAllDesignersWithWorks);

router
  .route('/:designerId')
  .get(validate(validation.getDesigner), controller.getDesignerById)
  .patch(
    fileUpload.single('profilePicture'),
    validate(validation.updateDesigner),
    controller.updateDesigner
  )
  .delete(validate(validation.deleteDesigner), controller.deleteDesigner);

  // router.get('/allDesigner', controller.getAllDesigners);

module.exports = {
  designerRoutes: router,
};
