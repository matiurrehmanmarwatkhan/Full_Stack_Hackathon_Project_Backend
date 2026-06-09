import express from "express";

import {
  createAppointment,
  getAppointments,
  getSingleAppointment,
  updateAppointment,
  deleteAppointment,
} from "../controllers/appointments.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Appointment
router.post("/create", protect, createAppointment);

// Get All Appointments
router.get("/all", protect, getAppointments);

// Get Single Appointment
router.get("/:id", protect, getSingleAppointment);

// Update Appointment
router.put("/:id", protect, updateAppointment);

// Delete Appointment
router.delete("/:id", protect, deleteAppointment);

export default router;
