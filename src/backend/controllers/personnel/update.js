const { updatePerson } = require('backend/model/general');

const updatePersonnel = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const updatedPersonnel = await updatePerson(id, body);
  res.json(updatedPersonnel);
};

module.exports = updatePersonnel;
