const express = require('express');

const router = express.Router();

const { generateExcel } = require('../../controllers/excel/generateExcel');

router.post('/', generateExcel);

module.exports = {
  routerExcel: router,
};
