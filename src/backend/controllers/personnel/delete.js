const { deletePerson } = require('backend/model/general');

const deletePersonnel = async (req, res) => {
  const { id } = req.params;
  await deletePerson(id);
  res.status(204).json({});
};

module.exports = deletePersonnel;
