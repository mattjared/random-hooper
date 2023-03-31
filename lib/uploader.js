require('dotenv').config();
const fs = require("fs");
const redis = require("redis");
              
const start = async function() {
  const data = fs.readFileSync('playerArray.json', 'utf8');
  const myArray = JSON.parse(data);

  var client = redis.createClient ({ url : process.env.REDIS_URL });
  client.on("error", function(err) { throw err; });
  await client.connect();

  await client.sAdd('hoopers', [...myArray], (err, reply) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Added string "${str}" to Redis list. Length of list: ${reply}`);
    }
  });

  await client.disconnect();
}

start();
