import Joi from 'joi';
 

export const agentReportValidator = Joi.object({
  
  title: Joi.string().required(),
  description: Joi.string().required(),
  dateReported: Joi.string().required(),
  location: Joi.string().required(),
  map: Joi.string().required(),
  image: Joi.string().required(),
  statusUpdate: Joi.string().required(),
  actionsTaken: Joi.string().required(),
  notes: Joi.string().required(),
  attachments: Joi.string().required()
})

export const updateAgentreportValidator = Joi.object({
  description: Joi.string(),
  location: Joi.string(),
  image: Joi.string(),
  notes: Joi.string()
})