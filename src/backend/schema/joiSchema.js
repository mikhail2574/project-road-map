const Joi = require('joi');

const nameRegexp = /^[А-ЯІ][а-яі]+\s[А-ЯІ]\.[А-ЯІ]\.$/;

const schemaPerson = Joi.object({
  name: Joi.string().required().pattern(nameRegexp),
  position: Joi.string().required(),
  rank: Joi.string().required(),
  rankShort: Joi.string(),
});

const schemaPersonUpdate = Joi.object({
  name: Joi.string().pattern(nameRegexp),
  position: Joi.string(),
  rank: Joi.string(),
});

const schemaCar = Joi.object({
  carName: Joi.string().required(),
  sign: Joi.string().required(),
  fuelType: Joi.string().required(),
  fuelConsumption: Joi.string().required(),
  oilType: Joi.string().required(),
  oilConsumption: Joi.string().required(),
  exploitationGroup: Joi.string().required(),
  exploitationGroupShort: Joi.string().required(),
  driver: Joi.string().required(),
  driverRank: Joi.string().required(),
  unit: Joi.string().required(),
  senior: Joi.string().required(),
  seniorRank: Joi.string().required(),
});

const schemaCarUpdate = Joi.object({
  carName: Joi.string(),
  sign: Joi.string(),
  fuelType: Joi.string(),
  fuelConsumption: Joi.string(),
  oilType: Joi.string(),
  oilConsumption: Joi.string(),
  exploitationGroup: Joi.string(),
  exploitationGroupShort: Joi.string(),
  driver: Joi.string(),
  driverRank: Joi.string(),
  unit: Joi.string(),
  senior: Joi.string(),
  seniorRank: Joi.string(),
});

module.exports = {
  schemaPerson,
  schemaPersonUpdate,
  schemaCar,
  schemaCarUpdate,
};
