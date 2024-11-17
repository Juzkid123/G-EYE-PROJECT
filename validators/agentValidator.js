// import Joi from 'joi';

// // Define agent validation schema using Joi
// export const registerAgentValidator = Joi.object({
//   agencyName: Joi.string().required(),
//   officeNumber: Joi.string().required(),
//   email: Joi.string().email().required(),
//   agencyAddress: Joi.string().required(),
//   tinNumber: Joi.string().required(),
//   password: Joi.string().required()

// });

// // Validator middleware for agent registration
// export const loginValidateAgent = Joi.object({
//   email: Joi.string().email().required(),
//   password : Joi.string().required()
// })

// export const updateAgentValidator = Joi.object({
//   agencyAddress: Joi.string(),
//   password: Joi.string(),
//   agencyName: Joi.string()
// })

import Joi from 'joi';

// Define agent validation schema for registration
export const registerAgentValidator = Joi.object({
  agencyName: Joi.string().required(),
  officeNumber: Joi.string().required(),
  email: Joi.string().email().required(),
  agencyAddress: Joi.string().required(),
  tinNumber: Joi.string().required(),
  password: Joi.string().required()
});

// Define agent validation schema for login
export const loginAgentValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

// Define agent validation schema for updating profile
export const updateAgentValidator = Joi.object({
  agencyAddress: Joi.string(),
  password: Joi.string(),
  agencyName: Joi.string()
});
