const { getPersonnelById } = require('backend/model/general');
const { requestError } = require('backend/services');

const getById = async (req, res) => {
  const { id } = req.params;
  const personnel = await getPersonnelById(id);
  res.json(personnel);
};

module.exports = getById;
