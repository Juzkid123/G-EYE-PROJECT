import { Router } from "express";
import { 
  registerAgent, 
  loginAgent, 
  getProfile, 
  logoutAgent, 
  updateProfile 
} from "../controllers/agentController.js";
import { agentAvatarUpload, reportImageUpload } from "../middlewares/upload.js";
import { isAuthenticated} from "../middlewares/auth.js";
import { addAgentReport, getAgentReports } from "../controllers/agentreport.js";

// Create router
const agentRouter = Router();

// Agent registration
agentRouter.post('/agents/register', registerAgent);

// Agent login
agentRouter.post('/agents/login', loginAgent);
agentRouter.post('/agents/report', reportImageUpload.single("image"),addAgentReport )
agentRouter.get('/agents/reports',getAgentReports);

// Get agent profile (protected)
agentRouter.get('/agents/me', isAuthenticated, getProfile);

// Agent logout (protected)
agentRouter.post('/agents/logout', isAuthenticated, logoutAgent);

// Update agent profile (protected, with avatar upload)
agentRouter.patch(
  '/agents/me',
  isAuthenticated,
  agentAvatarUpload.single('avatar'),
  updateProfile
);

// Export router
export default agentRouter;
