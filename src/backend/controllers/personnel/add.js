const { addPerson } = require('../../model/general');

const add = async (req, res) => {
  const newPerson = await addPerson(req.body);
  res.status(201).json(newPerson);
};

module.exports = add;
