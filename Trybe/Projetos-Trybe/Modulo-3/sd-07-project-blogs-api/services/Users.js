const JOI = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config/jwt');
const { Users } = require('../models');
require('dotenv').config();

const validateUserData = (data) => {
  const validation = JOI.object({
    displayName: JOI.string().min(8).required(),
    email: JOI.string().email().required(),
    password: JOI.string()
      .min(6)
      .required()
      .messages({ 'string.min': '"password" length must be 6 characters long' }),
    image: JOI.string(),
  }).validate(data);
  if (validation.error) throw validation.error.details[0];
};
const createUser = async (data) => {
  validateUserData(data);
  try {
    await Users.create(data);
    const token = jwt.sign(
      { email: data.email, password: data.password },
      process.env.JWT_SECRET,
      jwtConfig,
    );
    return { token };
  } catch (err) {
    throw new Error('User already registered');
  }
};

const getAllusers = async () => Users.findAll();

const getUserById = async (id) => {
  const result = await Users.findByPk(id);
  if (result === null) throw new Error('User does not exist');
  return result;
};

const deleteUser = async (id) => Users.destroy({ where: { id } });

module.exports = {
  createUser,
  getAllusers,
  getUserById,
  deleteUser,
};
