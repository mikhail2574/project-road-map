const { requestError } = require('../services');
const { log } = require('console');
const ExcelJS = require('exceljs');
const path = require('path');

const pathToExcel = path.join(
  __dirname,
  '..',
  '..',
  'backend',
  'fileStorage',
  'excel',
  'roadXS.xlsx'
);
const workbook = new ExcelJS.Workbook();

const parseInfo = async () => {
  await workbook.xlsx.readFile(pathToExcel);
  const worksheet = workbook.getWorksheet('Довідники');
  if (!worksheet) {
    throw new Error('Worksheet not found');
  }

  const rowDataCars = [];
  const rowDataPersonnel = [];
  const rowDataRoadType = [];
  const rowDataRoutes = [];

  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber <= 2) return; // пропускаю 1 рядок, бо так оформленний ексель

    //   формую об'єкт з даними, літери відповідають стовпцям в екселі
    const rowCars = {
      carName: row.values[1], // 'A'
      sign: row.values[2], // 'B'
      fuelType: row.values[3], // 'C'
      fuelConsumption: row.values[4], // 'D'
      oilType: row.values[5], // 'E'
      oilConsumption: row.values[6], // 'F'
      exploitationGroupShort: row.values[7], // 'G'
      exploitationGroup: row.values[8], // 'H'
      driver: row.values[9], // 'I'
      driverRank: row.values[10], // 'J'
      unit: row.values[11], // 'K'
      senior: row.values[12], // 'L'
      seniorRank: row.values[13], // 'M'
    };

    const rowPersonnel = {
      position: row.values[19], // 'S'
      rank: row.values[20], // 'T'
      rankShort: row.values[21], // 'U'
      name: row.values[22], // 'V'
    };

    const rowRoadType = {
      roadType: row.values[16], // 'P'
      correction: row.values[17], // 'Q'
    };

    const rowRoutes = {
      from: row.values[26], // 'Z'
      to: row.values[27], // 'AA'
      return: row.values[28], // 'AB'
      route: row.values[29], // 'AC'
    };

    //   додаю об'єкт в масив, якщо він не пустий
    if (rowCars.carName !== undefined) {
      rowDataCars.push(rowCars);
    }
    if (rowPersonnel.name !== undefined) {
      rowDataPersonnel.push(rowPersonnel);
    }
    if (rowRoadType.roadType !== undefined) {
      rowDataRoadType.push(rowRoadType);
    }
    if (rowRoutes.from !== undefined) {
      rowDataRoutes.push(rowRoutes);
    }
  });

  const data = {
    cars: rowDataCars,
    personnel: rowDataPersonnel,
    roadType: rowDataRoadType,
    routes: rowDataRoutes,
  };
  return data;
};

const addCarToExcel = async car => {
  const workbook = new ExcelJS.Workbook();
  const pathToExcel = path.resolve(
    __dirname,
    '..',
    'fileStorage',
    'excel',
    'roadXS.xlsx'
  );
  await workbook.xlsx.readFile(pathToExcel);
  const worksheet = workbook.getWorksheet('Довідники');
  if (!worksheet) {
    throw new Error('Worksheet not found');
  }

  const data = await parseInfo();
  const carInExcel = data.cars.find(item => item.sign === car.sign);
  if (carInExcel) {
    throw requestError(409, 'Такий автомобіль вже існує');
  }

  const columnNumber = 1;
  const startRowNumber = 2;
  let lastRowNumber;

  // із-зі того що на одному листі декілька таблиць, відловлюю останню строку таблиці
  for (let i = worksheet.rowCount; i >= startRowNumber; i--) {
    const row = worksheet.getRow(i);
    if (row.getCell(columnNumber).value) {
      lastRowNumber = i;
      break;
    }
  }

  const row = worksheet.getRow(lastRowNumber + 1);
  row.getCell(1).value = car.carName;
  row.getCell(2).value = car.sign;
  row.getCell(3).value = car.fuelType;
  row.getCell(4).value = car.fuelConsumption;
  row.getCell(5).value = car.oilType;
  row.getCell(6).value = car.oilConsumption;
  row.getCell(7).value = car.exploitationGroupShort;
  row.getCell(8).value = car.exploitationGroup;
  row.getCell(9).value = car.driver;
  row.getCell(10).value = car.driverRank;
  row.getCell(11).value = car.unit;
  row.getCell(12).value = car.senior;
  row.getCell(13).value = car.seniorRank;

  await workbook.xlsx.writeFile(pathToExcel);
  return car;
};

const addPersonToExcel = async person => {
  const workbook = new ExcelJS.Workbook();
  const pathToExcel = path.resolve(
    __dirname,
    '..',
    'fileStorage',
    'excel',
    'roadXS.xlsx'
  );
  await workbook.xlsx.readFile(pathToExcel);
  const worksheet = workbook.getWorksheet('Довідники');
  if (!worksheet) {
    throw new Error('Worksheet not found');
  }

  const data = await parseInfo();
  const personInExcel = data.personnel.find(item => item.name === person.name);
  if (personInExcel) {
    throw requestError(409, 'Такий службовець вже існує');
  }

  const columnNumber = 19; // вибірка першого стовпця з даними про персонал
  const startRowNumber = 2;
  let lastRowNumber;

  // із-зі того що на одному листі декілька таблиць, відловлюю останню строку таблиці
  for (let i = worksheet.rowCount; i >= startRowNumber; i--) {
    const row = worksheet.getRow(i);
    if (row.getCell(columnNumber).value) {
      lastRowNumber = i;
      break;
    }
  }
  if (!lastRowNumber) {
    lastRowNumber = 3;
  }

  const shortRanksEnum = {
    майор: 'м-р',
    полковник: 'п-к',
    підполковник: 'п-пк',
    капітан: 'к-н',
    'старший лейтенант': 'ст. л-т',
    лейтенант: 'л-т',
    'старший сержант': 'ст. с-т',
    сержант: 'с-т',
    солдат: 'солд',
  };

  if (person.rankShort === undefined) {
    person.rankShort = shortRanksEnum[person.rank];
  }

  const row = worksheet.getRow(lastRowNumber + 1);
  row.getCell(19).value = person.position;
  row.getCell(20).value = person.rank;
  row.getCell(21).value = person.rankShort;
  row.getCell(22).value = person.name;

  await workbook.xlsx.writeFile(pathToExcel);
  return person;
};

module.exports = {
  parseInfo,
  addCarToExcel,
  addPersonToExcel,
};
