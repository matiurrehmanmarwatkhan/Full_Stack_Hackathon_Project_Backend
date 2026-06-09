import { Router } from "express";

import {
  createReceptionist,
  getReceptionists,
  getSingleReceptionist,
  updateReceptionist,
  deleteReceptionist,
} from "../controllers/receptionist.js";

import protect from "../middleware/authMiddleware.js";

const router = Router();

// Create Receptionist
router.post("/create", protect, createReceptionist);

// Get All Receptionists
router.get("/all", protect, getReceptionists);

// Get Single Receptionist
router.get("/:id", protect, getSingleReceptionist);

// Update Receptionist
router.put("/:id", protect, updateReceptionist);

// Delete Receptionist
router.delete("/:id", protect, deleteReceptionist);

export default router;
