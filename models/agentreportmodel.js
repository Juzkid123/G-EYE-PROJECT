import mongoose from "mongoose";

const AgentReportSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    dateReported: { type: Date, default: Date.now },
    location: { type: String, required: true },
    map: { type: String }, 
    image: { type: String }, 
    statusUpdate: { type: String, default: "Pending" },
    actionsTaken: { type: String },
    notes: { type: String },
    attachments: [{ type: String }], 
  },
  { timestamps: true }
);

export const AgentReportModel = mongoose.model("AgentReport", AgentReportSchema);

export default AgentReportModel;
