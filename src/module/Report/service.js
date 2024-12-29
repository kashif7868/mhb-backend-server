const Report = require('./model');  // Import the Report model

// Get all reports
const getAllReports = async () => {
  try {
    return await Report.find();
  } catch (err) {
    throw new Error('Error fetching reports from database');
  }
};

// Update a report
const updateReport = async (reportId, updatedData) => {
  try {
    const report = await Report.findById(reportId);
    if (!report) {
      return null;  // Report not found
    }

    // Update the fields
    report.totalOrders = updatedData.totalOrders || report.totalOrders;
    report.totalCompletedOrders = updatedData.totalCompletedOrders || report.totalCompletedOrders;
    report.totalPendingOrders = updatedData.totalPendingOrders || report.totalPendingOrders;
    report.sales = updatedData.sales || report.sales;
    report.orders = updatedData.orders || report.orders;
    report.totalUsers = updatedData.totalUsers || report.totalUsers;
    report.overallIncome = updatedData.overallIncome || report.overallIncome;
    report.targetGoal = updatedData.targetGoal || report.targetGoal;
    report.progressToGoal = updatedData.progressToGoal || report.progressToGoal;

    await report.save();
    return report;
  } catch (err) {
    throw new Error('Error updating report');
  }
};

module.exports = {
  getAllReports,
  updateReport,
};
