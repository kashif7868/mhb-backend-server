const reportService = require('./service');

const getAllReports = async (req, res) => {
  try {
    const reports = await reportService.getAllReports();
    res.status(200).json(reports);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching reports', error: err });
  }
};

const updateReport = async (req, res) => {
  const { reportId } = req.params;
  const updatedData = req.body;

  try {
    const updatedReport = await reportService.updateReport(reportId, updatedData);
    if (!updatedReport) {
      return res.status(404).json({ message: 'Report not found' });
    }
    res.status(200).json(updatedReport);
  } catch (err) {
    res.status(500).json({ message: 'Error updating report', error: err });
  }
};

module.exports = {
  getAllReports,
  updateReport,
};
