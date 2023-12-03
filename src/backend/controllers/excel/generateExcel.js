const generateExcel = require('../../model/carsExcel');
const { ctrlWrapper } = require('../../services');

const genExcel = async (req, res) => {
  try {
    const path = await generateExcel();
    res.download(path);
  } catch (error) {
    console.error(error); // Log any errors that occur
    res.status(500).send('An error occurred while generating the Excel file.');
  }
};

module.exports = {
  generateExcel: ctrlWrapper(genExcel),
};
