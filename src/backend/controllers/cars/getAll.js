const { getCars } = require('../../model/general');

const getAllCars = async (req, res) => {
  const cars = await getCars();
  res.json(cars);
};

module.exports = getAllCars;
