const { getPersonnelById } = require('../../model/general');

const getById = async (req, res) => {
  const { id } = req.params;
  const personnel = await getPersonnelById(id);
  res.json(personnel);
};

module.exports = getById;
