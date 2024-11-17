import mongoose from "mongoose";

const agentSchema = new mongoose.Schema(
  {
    agencyName: { type: String, required: true },
    officeNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    agencyAddress: { type: String, required: true },
    tinNumber: { type: String, required: true },
  },
  { timestamps: true }
);

const AgentModel = mongoose.model("Agent", agentSchema);

export default AgentModel;

