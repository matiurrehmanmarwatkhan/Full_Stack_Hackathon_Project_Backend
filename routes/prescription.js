import express from "express";

import {
  createPrescription,
  getPrescriptions,
  getSinglePrescription,
  updatePrescription,
  deletePrescription,
} from "../controllers/prescription.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Prescription
router.post("/create", protect, createPrescription);

// Get All Prescriptions
router.get("/all", protect, getPrescriptions);

// Get Single Prescription
router.get("/:id", protect, getSinglePrescription);

// Update Prescription
router.put("/:id", protect, updatePrescription);

// Delete Prescription
router.delete("/:id", protect, deletePrescription);

export default router;
