const JOI = require('@hapi/joi');
const { Categories } = require('../models');

const validateInputData = (data) => {
  const validation = JOI.object({
    name: JOI.string().required(),
  }).validate(data);
  if (validation.error) throw validation.error.details[0].message;
};

const createCategory = async (data) => {
  validateInputData(data);
  return Categories.create(data);
};

const getAllCategories = async () => Categories.findAll();

module.exports = {
  createCategory,
  getAllCategories,
};
