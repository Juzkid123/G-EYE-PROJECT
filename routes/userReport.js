import { Router } from "express";
import { addUserReport, getUserReports } from "../controllers/userreport.js";



// Create router
const userReportRouter = Router();

// Define route
userReportRouter.post('/users/report',reportImageUpload.single('image'), addUserReport); // Users can only report incidents
userReportRouter.get('/users/reports', getUserReports);


// Export router
export default userReportRouter;
