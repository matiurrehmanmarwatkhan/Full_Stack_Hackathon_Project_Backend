import mongoose from "mongoose";

const diagnosisLogSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },

    symptoms: [
      {
        type: String,
        required: true,
      },
    ],

    aiResponse: {
      type: String,
      required: true,
    },

    riskLevel: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Low",
    },
  },
  {
    timestamps: true,
  },
);

const DiagnosisLog = mongoose.model("DiagnosisLog", diagnosisLogSchema);

export default DiagnosisLog;
