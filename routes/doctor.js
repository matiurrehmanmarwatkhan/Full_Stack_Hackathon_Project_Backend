import express from "express";

import {
  createDoctor,
  getDoctors,
  getSingleDoctor,
  updateDoctor,
  deleteDoctor,
} from "../controllers/doctor.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Doctor
router.post("/create", protect, createDoctor);

// Get All Doctors
router.get("/all", protect, getDoctors);

// Get Single Doctor
router.get("/:id", protect, getSingleDoctor);

// Update Doctor
router.put("/:id", protect, updateDoctor);

// Delete Doctor
router.delete("/:id", protect, deleteDoctor);

export default router;
