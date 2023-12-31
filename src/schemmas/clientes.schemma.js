import Joi from 'joi'

export const schemmaClientes = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string().min(10).max(11).pattern(/^[0-9]{11}$/).required(),
  cpf: Joi.string().length(11).pattern(/^[0-9]{11}$/).required(),
  birthday: Joi.date().iso().raw().required()
})
