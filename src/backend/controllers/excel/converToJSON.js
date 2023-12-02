const ExcelJS = require('exceljs');
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../../db/cars.json');

const convertExcelToJson = async filePath => {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);

  const worksheet = workbook.getWorksheet('Довідники'); // or use the worksheet name
  if (!worksheet) {
    throw new Error('Worksheet not found');
  }

  const data = [];
  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber <= 2) return; // Skip the header row
    if (row.values[1] === undefined) return; // Skip the footer row

    const rowData = {
      carName: row.values[1],
      sign: row.values[2],
      fuelType: row.values[3],
      fuelConsumption: row.values[4],
      oilType: row.values[5],
      oilConsumption: row.values[6],
      exploitationGroupShort: row.values[7],
      exploitationGroup: row.values[8],
      driver: row.values[9],
      driverRank: row.values[10].result,
      unit: row.values[11],
      senior: row.values[12],
      seniorRank: row.values[13].result,
    };

    data.push(rowData);
  });
  fs.writeFile(dbPath, JSON.stringify(data, null, 2), err => {
    if (err) throw err;
    console.log('Data written to file');
  });

  return data;
};

// Usage
convertExcelToJson('../../fileStorage/excel/roadMap.xlsm')
  .then(data => console.log(data))
  .catch(err => console.error(err));
