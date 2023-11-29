const { addCar } = require('../../model/general');

const add = async (req, res) => {
  const newCar = await addCar(req.body);
  res.status(201).json(newCar);
};

module.exports = add;
