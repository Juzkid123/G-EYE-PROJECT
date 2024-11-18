import Joi from 'joi';
 

export const agentReportValidator = Joi.object({
  
  title: Joi.string().required(),
  description: Joi.string().required(),
  dateReported: Joi.string().required(),
  location: Joi.string().required(),
  map: Joi.string().required(),
  image: Joi.string().required(),
  statusUpdate: Joi.string(),
  actionsTaken: Joi.string(),
  notes: Joi.string().required(),
  attachments: Joi.string()
}).unknown()

export const updateAgentreportValidator = Joi.object({
  description: Joi.string(),
  location: Joi.string(),
  image: Joi.string(),
  notes: Joi.string()
})