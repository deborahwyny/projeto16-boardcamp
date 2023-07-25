import Joi from "joi";


export const schemmaGame = Joi.object({
    name: Joi.string().required(),
    stockTotal: Joi.number().greater(0).required(),
    pricePerDay: Joi.number().greater(0).required()
})