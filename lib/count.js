const fs = require("fs");

const count = async function() {
  const fileData = fs.readFileSync('playerArray.json', 'utf8');
  const data = JSON.parse(fileData);
  console.log(data.length);
}

count();