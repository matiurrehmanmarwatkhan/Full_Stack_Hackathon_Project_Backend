import { Router } from "express";

import {
  createPatient,
  getPatients,
  getSinglePatient,
  updatePatient,
  deletePatient,
} from "../controllers/patient.js";

import protect from "../middleware/authMiddleware.js";

const router = Router();

// Create Patient
router.post("/create", protect, createPatient);

// Get All Patients
router.get("/all", protect, getPatients);

// Get Single Patient
router.get("/:id", protect, getSinglePatient);

// Update Patient
router.put("/:id", protect, updatePatient);

// Delete Patient
router.delete("/:id", protect, deletePatient);

export default router;
