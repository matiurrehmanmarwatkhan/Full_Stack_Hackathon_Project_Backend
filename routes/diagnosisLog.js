import express from "express";

import {
  createDiagnosisLog,
  getDiagnosisLogs,
  getSingleDiagnosisLog,
  updateDiagnosisLog,
  deleteDiagnosisLog,
} from "../controllers/diagnosisLog.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Diagnosis Log
router.post("/create", protect, createDiagnosisLog);

// Get All Diagnosis Logs
router.get("/all", protect, getDiagnosisLogs);

// Get Single Diagnosis Log
router.get("/:id", protect, getSingleDiagnosisLog);

// Update Diagnosis Log
router.put("/:id", protect, updateDiagnosisLog);

// Delete Diagnosis Log
router.delete("/:id", protect, deleteDiagnosisLog);

export default router;
