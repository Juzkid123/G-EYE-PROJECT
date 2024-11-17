
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userReportRouter from './models/userreport.js';
import agentRouter from './routes/agentRoutes.js';
import agentReportRouter from './routes/agentreport.js';


// Connect to database
await mongoose.connect(process.env.MONGO_URI);

// Create an express app
const app = express();

// Use middlewares
app.use(express.json());
app.use(cors());

// Use routes
app.use(agentRouter);
app.use(userReportRouter);
app.use(agentReportRouter)

// Listen for incoming requests
app.listen(5050, () => {
    console.log('App is listening on port 5050');
});








































// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";
// import agentRouter from "./routes/agentRoutes.js";
// import reportRouter from "./routes/userRoutes.js";

// // dotenv.config(); // Load environment variables

// const app = express();

// // Middleware
// app.use(express.json()); // Parse incoming JSON requests
// app.use(cors()); // Enable Cross-Origin Resource Sharing

// // Use Routes
// app.use(agentRouter)
// app.use(reportRouter)

// // app.use("/api/agents", agentRoutes); // Routes for agents
// // app.use("/api/users", userRoutes); // Routes for users
// // app.use("/api/reports", reportRoutes); // Routes for reports

// // 404 Not Found Middleware
// app.use((req, res, next) => {
//   const error = new Error(`Not Found - ${req.originalUrl}`);
//   res.status(404);
//   next(error);
// });

// // General Error Handling Middleware
// app.use((err, req, res, next) => {
//   const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
//   res.status(statusCode);
//   res.json({
//     message: err.message,
//     stack: process.env.NODE_ENV === "production" ? null : err.stack, // Hide stack trace in production
//   });
// });

// // Connect to MongoDB and start the server
// await mongoose.connect(process.env.MONGO_URI);
// // const PORT = process.env.PORT || 5000;
// // mongoose
// //   .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// //   .then(() => {
// //     console.log("Connected to MongoDB");
// //     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// //   })
// //   .catch((error) => {
// //     console.error(`Error connecting to MongoDB: ${error.message}`);
// //     process.exit(1);
// //   });
