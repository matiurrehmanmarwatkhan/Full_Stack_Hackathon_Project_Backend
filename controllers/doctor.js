import Doctor from "../models/doctor.js";
import mongoose from "mongoose";

// Create Doctor
export const createDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.create({
      ...req.body,
      createdBy: req.user._id,
    });

    res.status(201).json({
      message: "Doctor created successfully",
      doctor,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Doctors
export const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find()
      .populate("patients")
      .populate("createdBy", "username email");

    res.status(200).json({
      total: doctors.length,
      doctors,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Single Doctor
export const getSingleDoctor = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({
        message: "Doctor not found",
      });
    }

    const doctor = await Doctor.findById(req.params.id)
      .populate("patients")
      .populate("createdBy", "username email");

    if (!doctor) {
      return res.status(404).json({
        message: "Doctor not found",
      });
    }

    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Doctor
export const updateDoctor = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({
        message: "Doctor not found",
      });
    }

    const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!doctor) {
      return res.status(404).json({
        message: "Doctor not found",
      });
    }

    res.status(200).json({
      message: "Doctor updated successfully",
      doctor,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Doctor
export const deleteDoctor = async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({
        message: "Doctor not found",
      });
    }

    const doctor = await Doctor.findByIdAndDelete(req.params.id);

    if (!doctor) {
      return res.status(404).json({
        message: "Doctor not found",
      });
    }

    res.status(200).json({
      message: "Doctor deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
