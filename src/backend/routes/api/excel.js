const express = require('express');

const router = express.Router();

const { generateMainList } = require('../../controllers/excel');

router.post('/main', generateMainList);
router.post('/subTable', generateMainList);

module.exports = {
  routerExcel: router,
};
