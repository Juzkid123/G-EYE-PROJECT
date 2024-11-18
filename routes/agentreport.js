import { Router } from "express";
import { addAgentReport, getAgentReports } from "../controllers/agentreport.js";
import { agentAvatarUpload } from "../middlewares/upload.js";


// Create router
const agentReportRouter = Router();

// Define route
agentReportRouter.post('/agents/report',agentAvatarUpload.single("image"),addAgentReport); // Users can only report incidents
agentReportRouter.get('/agents/reports',getAgentReports);


// Export router
export default agentReportRouter;
