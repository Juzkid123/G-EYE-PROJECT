import agentReportRouter from "../routes/agentreport.js";
import { agentReportValidator} from "../validators/agentreport.js"

export const addAgentReport = async (req,res,next) => {
try {
  //validate agent inputs
  const {error, value} = agentReportValidator.validate({
    ...req.body,
    avatar: req.file?.filename
  })
  if (error) {
    return res.status(422).json(error);
  }
  //Write agent to database
  await Report.create(value);
  //Respond to request
  res.status(201).json("report was Added!");
  } catch (error) {
    next(error);
  }
}

export const getAgentReports = async (req, res, next) => {
  try {
      const { filter = "{}", limit = 10, skip = 0 } = req.query;
      // Fetch Agent from database
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