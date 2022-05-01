const category = require('../services/Categories');
const { CREATED, OK, SERVERERROR, BADREQUEST } = require('./httpCodes');

const createCategory = async (req, res) => {
  try {
    const result = await category.createCategory(req.body);
    res.status(CREATED).json(result);
  } catch (error) {
    res.status(BADREQUEST).json({ message: error });
  }
};

const getAllCategories = async (_req, res) => {
  try {
    const result = await category.getAllCategories();
    res.status(OK).json(result);
  } catch (error) {
    res.status(SERVERERROR).json({ message: 'Algo deu muito errado' });
  }
};
module.exports = {
  createCategory,
  getAllCategories,
};
