import userReport from "../models/userreport.js"
import { userReportValidator} from "../validators/userreport.js"

export const addUserReport = async (req,res,next) => {
try {
  //validate user inputs
  const {error, value} = userReportValidator.validate({
    ...req.body,
    image: req.file?.filename
  })
  if (error) {
    return res.status(422).json(error);
  }
  //Write user to database 
  
  await userReport.create(value);
  //Respond to request
  res.status(201).json("report was Added!");
  } catch (error) {
    next(error);
  }
}

export const getUserReports = async (req, res, next) => {
  try {
      const { filter = "{}", limit = 10, skip = 0 } = req.query;
      // Fetch User from database
      const report = await userReport
          .find(JSON.parse(filter))
          .limit(limit)
          .skip(skip);
      // Return response
      res.status(200).json(report);
  } catch (error) {
      next(error);
  }
}































































// import UserReport from "../models/agentreportmodel.js"; // Import UserReport schema

// // Create a new report by a user
// export const createUserReport = async (req, res) => {
//   try {
//     const { title, dateReported, description, image, location, map } = req.body;

//     const newReport = new UserReport({
//       title,
//       dateReported,
//       description,
//       image,
//       location,
//       map,
//     });

//     await newReport.save();
//     return res.status(201).json({ message: "User report submitted successfully", report: newReport });
//   } catch (error) {
//     console.error("Error creating user report:", error.message);
//     return res.status(500).json({ message: "Failed to create user report" });
//   }
// };

// // Get all user reports
// export const getUserReports = async (req, res) => {
//   try {
//     const reports = await UserReport.find();
//     return res.status(200).json(reports);
//   } catch (error) {
//     console.error("Error fetching user reports:", error.message);
//     return res.status(500).json({ message: "Failed to fetch user reports" });
//   }
// };

// // Get a single report by ID
// export const getUserReportById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const report = await UserReport.findById(id);

//     if (!report) {
//       return res.status(404).json({ message: "Report not found" });
//     }

//     return res.status(200).json(report);
//   } catch (error) {
//     console.error("Error fetching user report:", error.message);
//     return res.status(500).json({ message: "Failed to fetch report" });
//   }
// };

// // Update a user report
// export const updateUserReport = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedData = req.body;

//     const updatedReport = await UserReport.findByIdAndUpdate(id, updatedData, { new: true });

//     if (!updatedReport) {
//       return res.status(404).json({ message: "Report not found" });
//     }

//     return res.status(200).json({ message: "Report updated successfully", report: updatedReport });
//   } catch (error) {
//     console.error("Error updating user report:", error.message);
//     return res.status(500).json({ message: "Failed to update report" });
//   }
// };

// // Delete a user report
// export const deleteUserReport = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const deletedReport = await UserReport.findByIdAndDelete(id);

//     if (!deletedReport) {
//       return res.status(404).json({ message: "Report not found" });
//     }

//     return res.status(200).json({ message: "Report deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting report:", error.message);
//     return res.status(500).json({ message: "Failed to delete report" });
//   }
// };
