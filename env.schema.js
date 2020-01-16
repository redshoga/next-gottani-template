const Joi = require('@hapi/joi');

module.exports = Joi.object({
  sampleKey: Joi.string(),
})
