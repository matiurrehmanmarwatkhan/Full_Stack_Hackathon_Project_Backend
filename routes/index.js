import { Router } from "express";
import authRoutes from "./user.js";
import patientRoutes from "./patient.js";
import receptionistRoutes from "./receptionist.js";
import doctorRoutes from "./doctor.js";
import diagnosisLogRoutes from "./diagnosisLog.js";
import prescriptionRoutes from "./prescription.js";
import appointmentRoutes from "./appointments.js";

const router = Router();

// user
router.use("/auth", authRoutes);

// patient
router.use("/patients", patientRoutes);

// doctor
router.use("/doctors", doctorRoutes);

// receptionist
router.use("/receptionists", receptionistRoutes);

// daignosis
router.use("/diagnosislog", diagnosisLogRoutes);

// prescription
router.use("/prescription", prescriptionRoutes);

// appointment
router.use("/appointment", appointmentRoutes);

export default router;
