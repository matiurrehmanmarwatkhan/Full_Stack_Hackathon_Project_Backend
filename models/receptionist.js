import mongoose from "mongoose";

const receptionistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },

    age: {
      type: Number,
      required: true,
    },

    shift: {
      type: String,
      enum: ["Morning", "Evening", "Night"],
      default: "Morning",
    },

    salary: {
      type: Number,
      required: true,
    },

    address: {
      type: String,
    },

    joiningDate: {
      type: Date,
      default: Date.now,
    },

    available: {
      type: Boolean,
      default: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  },
);

const Receptionist = mongoose.model("Receptionist", receptionistSchema);

export default Receptionist;
