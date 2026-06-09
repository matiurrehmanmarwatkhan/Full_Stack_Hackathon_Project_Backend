import DiagnosisLog from "../models/diagnosis.js";

// Create Diagnosis Log
export const createDiagnosisLog = async (req, res) => {
  try {
    const diagnosisLog = await DiagnosisLog.create(req.body);

    res.status(201).json({
      message: "Diagnosis log created successfully",
      diagnosisLog,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Diagnosis Logs
export const getDiagnosisLogs = async (req, res) => {
  try {
    const diagnosisLogs = await DiagnosisLog.find().populate(
      "patientId"
    );

    res.status(200).json({
      total: diagnosisLogs.length,
      diagnosisLogs,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Single Diagnosis Log
export const getSingleDiagnosisLog = async (req, res) => {
  try {
    const diagnosisLog = await DiagnosisLog.findById(
      req.params.id
    ).populate("patientId");

    if (!diagnosisLog) {
      return res.status(404).json({
        message: "Diagnosis log not found",
      });
    }

    res.status(200).json(diagnosisLog);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Diagnosis Log
export const updateDiagnosisLog = async (req, res) => {
  try {
    const diagnosisLog = await DiagnosisLog.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!diagnosisLog) {
      return res.status(404).json({
        message: "Diagnosis log not found",
      });
    }

    res.status(200).json({
      message: "Diagnosis log updated successfully",
      diagnosisLog,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Diagnosis Log
export const deleteDiagnosisLog = async (req, res) => {
  try {
    const diagnosisLog = await DiagnosisLog.findByIdAndDelete(
      req.params.id
    );

    if (!diagnosisLog) {
      return res.status(404).json({
        message: "Diagnosis log not found",
      });
    }

    res.status(200).json({
      message: "Diagnosis log deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};