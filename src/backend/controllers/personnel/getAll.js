const { getPersonnel } = require('backend/model/general');

const getAll = async (req, res) => {
  const personnel = await getPersonnel();
  res.json(personnel);
};

module.exports = getAll;
