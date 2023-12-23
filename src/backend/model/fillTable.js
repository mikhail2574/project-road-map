const ExcelJS = require('exceljs');
const path = require('path');
const { shortRanksEnum } = require('./../services/constants');

const pathToExcel = path.resolve(__dirname, '../fileStorage/excel/roadXS.xlsx');

const rightBorderFirstTable = [11, 14, 16, 18];
const secondTableKeys = [
  'from',
  'depTime',
  'arrTime',
  ['mileage', 'withCargo'],
  ['mileage', 'withoutCargo'],
  ['mileage', 'total'],
  ['mileage', 'withTrailer'],
  ['mileage', 'withTug'],
  ['motorHours', 'onStay'],
  ['motorHours', 'onMove'],
  ['motorHours', 'sum'],
  ['work', 'nameCargo'],
  ['work', 'weight'],
  'odometer',
];

const fillTable = async (tableId = 1, body = {}) => {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(pathToExcel);

  const worksheet = workbook.getWorksheet(`Ш Лист ${tableId}`);
  if (tableId === 1) {
    switch (body.facts.length) {
      case 0:
        for (let i = 12; i <= 30; i += 2) {
          const row = worksheet.getRow(i);
          for (let i = 9; i < 19; i++) {
            row.getCell(i).value = '';
            row.getCell(i).alignment = {
              vertical: 'middle',
              horizontal: 'center',
            };
            if (rightBorderFirstTable.includes(i)) {
              row.getCell(i).border = {
                bottom: { style: 'thin' },
                right: { style: 'thin' },
              };
            } else {
              row.getCell(i).border = {
                bottom: { style: 'thin' },
              };
            }
          }
        }
        break;

      default:
        worksheet.getCell('N2').value = body.documentDate;
        worksheet.getCell('O3').value = body.documentNumber;
        worksheet.getCell('L4').value = body.militaryUnit;
        worksheet.getCell('P5').value = body.supervisor.rank;
        worksheet.getCell('L5').value = body.driver.name;
        worksheet.getCell('J5').value = body.driver.rank;

        let routeCell = worksheet.getCell('K6');
        let supervisorPosCell = worksheet.getCell('I7');
        if (!routeCell.isMerged) {
          worksheet.mergeCells('K6', 'M6');
        }
        routeCell.value = body.route;
        worksheet.getCell('K6').value = body.route;
        if (!supervisorPosCell.isMerged) {
          worksheet.mergeCells('I7', 'M7');
        }
        supervisorPosCell.value = body.supervisor.position;
        worksheet.getCell('R7').value = body.supervisor.name;
        worksheet.getCell('J33').value = body.documentDate;
        worksheet.getCell('L33').value = body.car.carName;
        worksheet.getCell('M33').value = body.car.carSign;
        worksheet.getCell('K33').value = `Наряд № ${body.dutyNumber}`;

        const rowCounts = Math.ceil(body.facts.length * 2 + 12 - 2);
        for (let i = 12; i <= rowCounts; i += 2) {
          const row = worksheet.getRow(i);

          if (body) {
            for (let j = 9; j < 19; j++) {
              switch (j) {
                case 9:
                  row.getCell(j).value =
                    shortRanksEnum[body.supervisor.rank.toLowerCase()];
                  break;
                case 10:
                  row.getCell(j).value = body.supervisor.name;
                  break;
                case 11:
                case 14:
                  row.getCell(j).value = body.depTime;
                  break;
                case 12:
                  row.getCell(j).value =
                    shortRanksEnum[body.engineer.rank.toLowerCase()];
                  break;
                case 13:
                  row.getCell(j).value = body.engineer.name;
                  break;
                case 15:
                  const { departure, arrival } =
                    body.facts[Math.floor((i - 12) / 2)];
                  const timeSplited = departure.time.split(' ')[1];
                  row.getCell(j - 4).value = timeSplited;
                  row.getCell(j - 1).value = timeSplited;
                  row.getCell(j).value = departure.time;
                  row.getCell(j + 1).value = departure.odometer;
                  row.getCell(j + 2).value = arrival.time;
                  row.getCell(j + 3).value = arrival.odometer;
                  row.getCell(j).alignment = {
                    vertical: 'middle',
                    horizontal: 'center',
                  };
                  break;
                default:
                  break;
              }
            }
          }
        }
        if (rowCounts < 30) {
          for (let i = rowCounts + 2; i <= 30; i += 2) {
            const row = worksheet.getRow(i);
            for (let i = 9; i < 19; i++) {
              row.getCell(i).value = '';
              row.getCell(i).alignment = {
                vertical: 'middle',
                horizontal: 'center',
              };
              if (rightBorderFirstTable.includes(i)) {
                row.getCell(i).border = {
                  bottom: { style: 'thin' },
                  right: { style: 'thin' },
                };
              } else {
                row.getCell(i).border = {
                  bottom: { style: 'thin' },
                };
              }
            }
          }
        }

        if (body.expenses.length > 0) {
          const rowCountsPMM = Math.ceil(body.expenses.length + 35);

          for (let i = 36; i <= rowCountsPMM; i++) {
            const row = worksheet.getRow(i);
            const number = Math.floor(i - 36);
            console.log(body.expenses[number]);
            const {
              name,
              amountBefore,
              amountDuring,
              expense,
              byNorm,
              economy,
              overExpense,
              code,
              got,
              date,
            } = body.expenses[number];

            for (let j = 9; j < 18; j++) {
              switch (j) {
                case 9:
                  row.getCell(j).value = name;
                  break;
                case 10:
                  row.getCell(j).value = code;
                  break;
                case 11:
                  row.getCell(j).value = amountBefore;
                  break;
                case 12:
                  row.getCell(j).value = date;
                  break;
                case 13:
                  row.getCell(j).value = got;
                  break;
                case 14:
                  row.getCell(j).value = amountDuring;
                  break;
                case 15:
                  row.getCell(j).value = expense;
                  break;
                case 16:
                  row.getCell(j).value = byNorm;
                  break;
                case 17:
                  row.getCell(j).value = economy;
                  break;
                case 18:
                  row.getCell(j).value = overExpense;
                  break;
                default:
                  break;
              }
            }
          }
          if (rowCountsPMM < 44) {
            for (let i = rowCountsPMM + 1; i <= 44; i++) {
              const row = worksheet.getRow(i);
              for (let j = 9; j < 18; j++) {
                row.getCell(j).value = '';
              }
            }
          }
        }
        break;
    }
  }
  if (tableId === 2) {
    switch (body.routes.length) {
      case 0:
        for (let i = 6; i < 15; i++) {
          const row = worksheet.getRow(i);
          for (let i = 0; i < 14; i++) {
            row.getCell(i + 1).value = '';
          }
        }
        break;
      default:
        for (let i = 6; i < 15; i++) {
          const data = body.routes[i - 6];
          const row = worksheet.getRow(i);

          if (data) {
            for (let j = 0; j < secondTableKeys.length; j++) {
              const key = secondTableKeys[j];
              let value;
              if (Array.isArray(key)) {
                value = data[key[0]][key[1]];
              } else {
                value = data[key];
              }
              if (j === 0) {
                data.return === 'ні'
                  ? (value = `${data.from} - ${data.to} - ${data.from}`)
                  : (value = `${data.from} - ${data.to}`);
              }
              row.getCell(j + 1).value = value;
              row.getCell(j + 1).alignment = {
                vertical: 'middle',
                horizontal: 'left',
              };
            }
          }
        }

        worksheet.getCell('A18').value = body.fuelType;
        worksheet.getCell('B18').value = body.fuelConsumption;
        worksheet.getCell('D18').value = body.totalMileage;
        worksheet.getCell('H18').value = Math.round(
          (body.fuelConsumption * body.totalMileage) / 100 -
            ((body.fuelConsumption * body.totalMileage) / 100) * 0.15
        );
        break;
    }
  }

  await workbook.xlsx.writeFile(pathToExcel);
};

const mockDataSecondTable = {
  routes: [
    {
      from: 'Київ',
      to: 'Вінниця',
      return: 'ні',
      depTime: '7:30, 29.00.23',
      arrTime: '18:10, 29.00.23',
      mileage: {
        withCargo: 10,
        withoutCargo: 10,
        total: 20,
        withTrailer: '',
        withTug: '',
      },
      motorHours: { onStay: 10, onMove: 50, sum: 60 },
      work: { nameCargo: 'Пісок', weight: 15 },
      odometer: 12304,
    },
  ],
  totalMileage: 1557,
  driver: { name: 'Святий О.Я.', rank: 'солдат' },
  senior: { name: 'Кернес А.О.', rank: 'капітан' },
  fuelConsumption: 11.5,
  fuelType: 'ДТ',
};

module.exports = {
  fillTable,
};