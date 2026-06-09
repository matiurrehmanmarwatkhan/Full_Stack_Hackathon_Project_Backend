import Receptionist from "../models/receptionist.js";

// Create Receptionist
export const createReceptionist = async (req, res) => {
  try {
    const receptionist = await Receptionist.create({
      ...req.body,
      createdBy: req.user._id,
    });

    res.status(201).json({
      message: "Receptionist created successfully",
      receptionist,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Receptionists
export const getReceptionists = async (req, res) => {
  try {
    const receptionists = await Receptionist.find().populate(
      "createdBy",
      "username email",
    );

    res.status(200).json({
      total: receptionists.length,
      receptionists,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Single Receptionist
export const getSingleReceptionist = async (req, res) => {
  try {
    const receptionist = await Receptionist.findById(req.params.id).populate(
      "createdBy",
      "username email",
    );

    if (!receptionist) {
      return res.status(404).json({
        message: "Receptionist not found",
      });
    }

    res.status(200).json(receptionist);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Receptionist
export const updateReceptionist = async (req, res) => {
  try {
    const receptionist = await Receptionist.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    );

    if (!receptionist) {
      return res.status(404).json({
        message: "Receptionist not found",
      });
    }

    res.status(200).json({
      message: "Receptionist updated successfully",
      receptionist,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Receptionist
export const deleteReceptionist = async (req, res) => {
  try {
    const receptionist = await Receptionist.findByIdAndDelete(req.params.id);

    if (!receptionist) {
      return res.status(404).json({
        message: "Receptionist not found",
      });
    }

    res.status(200).json({
      message: "Receptionist deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
