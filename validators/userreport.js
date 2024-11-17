import Joi from "joi";

export const userReportValidator = Joi.object({
    title: Joi.string().required(),
    dateReported: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    location: Joi.string().required(),
    map: Joi.string().required()

})