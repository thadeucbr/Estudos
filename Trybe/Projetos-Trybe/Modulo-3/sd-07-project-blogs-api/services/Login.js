const JOI = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config/jwt');
const { Users } = require('../models');
require('dotenv').config();

const validateInput = (data) => {
  const validation = JOI.object({
    email: JOI.string().email().required(),
    password: JOI.string().min(6).required(),
  }).validate(data);
  if (validation.error) throw validation.error.details[0];
};

const signin = async (data) => {
  validateInput(data);
  const response = await Users.findOne({
    where: { email: data.email, password: data.password },
  });

  if (response === null) throw Error('Invalid fields');
  const token = jwt.sign(
    { email: data.email, password: data.password },
    process.env.JWT_SECRET,
    jwtConfig,
  );
  return { token };
};

module.exports = {
  signin,
};
