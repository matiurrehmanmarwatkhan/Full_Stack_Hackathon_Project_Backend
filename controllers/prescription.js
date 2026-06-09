import Prescription from "../models/prescription.js";

// Create Prescription
export const createPrescription = async (req, res) => {
  try {
    const prescription = await Prescription.create(req.body);

    res.status(201).json({
      message: "Prescription created successfully",
      prescription,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Prescriptions
export const getPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.find()
      .populate("patientId")
      .populate("doctorId");

    res.status(200).json({
      total: prescriptions.length,
      prescriptions,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Single Prescription
export const getSinglePrescription = async (req, res) => {
  try {
    const prescription = await Prescription.findById(req.params.id)
      .populate("patientId")
      .populate("doctorId");

    if (!prescription) {
      return res.status(404).json({
        message: "Prescription not found",
      });
    }

    res.status(200).json(prescription);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Prescription
export const updatePrescription = async (req, res) => {
  try {
    const prescription = await Prescription.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    );

    if (!prescription) {
      return res.status(404).json({
        message: "Prescription not found",
      });
    }

    res.status(200).json({
      message: "Prescription updated successfully",
      prescription,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Prescription
export const deletePrescription = async (req, res) => {
  try {
    const prescription = await Prescription.findByIdAndDelete(req.params.id);

    if (!prescription) {
      return res.status(404).json({
        message: "Prescription not found",
      });
    }

    res.status(200).json({
      message: "Prescription deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
