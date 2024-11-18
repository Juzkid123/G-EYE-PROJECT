import {AgentReportModel} from "../models/agentreportmodel.js"
import { agentReportValidator} from "../validators/agentreport.js"
import { reportImageUpload } from "../middlewares/upload.js"

export const addAgentReport = async (req,res,next) => {
  console.log("body--->", req.body)
try {
  //validate agent inputs
  const {error, value} = agentReportValidator.validate({
    ...req.body,
    image: req.file?.filename
  })
  if (error) {
    return res.status(422).json(error);
  }
  //Write agent to database
  await AgentReportModel.create({
    ...value
  });
  //Respond to request
  res.status(201).json("report was Added!");
  } catch (error) {
    next(error);
  }
}

export const getAgentReports = async (req, res, next) => {
  try {
      const { filter = "{}", limit = 10, skip = 0 } = req.query;
      // Fetch Agent report from database
      const AgentReportModel = await userReport
          .find(JSON.parse(filter))
          .limit(limit)
          .skip(skip);
      // Return response
      res.status(200).json(AgentReportModel);
  } catch (error) {
      next(error);
  }
}