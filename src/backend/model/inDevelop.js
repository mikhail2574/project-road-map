const axios = require('axios');

const handleFileChange = async () => {
  const response = await axios.post(
    'http://localhost:3001/api/excel',
    {},
    { responseType: 'blob' }
  );
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'roadMap.xlsx'); // or any other filename you want
  document.body.appendChild(link);
  link.click();
};

module.exports = handleFileChange;
