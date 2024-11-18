import { Router } from "express";
import { addAgentReport, getAgentReports } from "../controllers/agentreport.js";
import { reportImageUpload } from "../middlewares/upload.js";
import { isAuthenticated } from "../middlewares/auth.js";


// Create router
const agentReportRouter = Router();

// Define route
agentReportRouter.post('/agents/report', reportImageUpload.single("image"), isAuthenticated,addAgentReport); // Users can only report incidents
agentReportRouter.get('/agents/reports', isAuthenticated,getAgentReports);


// Export router
export default agentReportRouter;
