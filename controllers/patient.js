import Patient from "../models/patients.js";

// Create Patient
export const createPatient = async (req, res) => {
  try {
    const patient = await Patient.create({
      ...req.body,
      createdBy: req.user._id,
    });

    res.status(201).json({
      message: "Patient created successfully",
      patient,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Patients
export const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find()
      .populate("doctor", "username email")
      .populate("createdBy", "username email");

    res.status(200).json({
      total: patients.length,
      patients,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Single Patient
export const getSinglePatient = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id)
      .populate("doctor", "username email")
      .populate("createdBy", "username email");

    if (!patient) {
      return res.status(404).json({
        message: "Patient not found",
      });
    }

    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Patient
export const updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!patient) {
      return res.status(404).json({
        message: "Patient not found",
      });
    }

    res.status(200).json({
      message: "Patient updated successfully",
      patient,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Patient
export const deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findByIdAndDelete(req.params.id);

    if (!patient) {
      return res.status(404).json({
        message: "Patient not found",
      });
    }

    res.status(200).json({
      message: "Patient deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
