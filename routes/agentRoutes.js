import { Router } from "express";
import { 
  registerAgent, 
  loginAgent, 
  getProfile, 
  logoutAgent, 
  updateProfile 
} from "../controllers/agentController.js";
import { agentAvatarUpload} from "../middlewares/upload.js";
import { isAuthenticated} from "../middlewares/auth.js";
import { addAgentReport, getAgentReports } from "../controllers/agentreport.js";
import { addUserReport, getUserReports } from "../controllers/userreport.js";


// Create router
const agentRouter = Router();

// Agent registration
agentRouter.post('/agents/register', registerAgent);

// Agent login
agentRouter.post('/agents/login', loginAgent);

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

agentRouter.post('/agents/report', agentAvatarUpload.single("image"), isAuthenticated,addAgentReport); // Users can only report incidents
agentRouter.get('/agents/reports', isAuthenticated,getAgentReports); 

agentRouter.get('/users/reports', getUserReports);
agentRouter.post('/users/report',agentAvatarUpload.single('image'), addUserReport); // Users can only report incidents


// Export router
export default agentRouter;
