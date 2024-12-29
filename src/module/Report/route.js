const express = require('express');
const router = express.Router();
const validate = require('../../middlewares/validate');
const controller = require('./controller');
const { validateUpdate } = require('./validation');

// Get all reports
router.get('/', controller.getAllReports);

// Update a report using PATCH
router.patch('/:reportId', validateUpdate, controller.updateReport);

module.exports = {
  reportRoutes: router, // Export the router object for use elsewhere
};
