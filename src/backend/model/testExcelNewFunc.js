const ExcelJS = require('exceljs');
const path = require('path');

const excelPath = path.resolve(
  __dirname,
  '..',
  'fileStorage',
  'excel',
  'roadXS.xlsx'
);
// працює як по колонкам так і цілою таблицею
const autoFilter = async () => {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(excelPath);
  const worksheet = workbook.getWorksheet('Довідники');
  worksheet.autoFilter = {
    from: 'S2',
    to: 'V2',
  };
  await workbook.xlsx.writeFile(excelPath);
  console.log('AutoFilter is set');
};

autoFilter();
