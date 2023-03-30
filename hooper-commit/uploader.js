const fs = require("fs");
const redis = require("redis");
              
const start = async function() {
  // const data = fs.readFileSync('myArray.json', 'utf8');
  // const myArray = JSON.parse(data);

  var client = redis.createClient ({
    url : 'redis://default:636b12c3d32543f1a09d0a149600929d@us1-endless-cricket-40360.upstash.io:40360',
  });
  client.on("error", function(err) {
    throw err;
  });
  await client.connect();

  // await client.sAdd('jHoopers2', [...myArray], (err, reply) => {
  //   if (err) {
  //     console.error(err);
  //   } else {
  //     console.log(`Added string "${str}" to Redis list. Length of list: ${reply}`);
  //   }
  // });
  
  // const value = await client.get('jHoopers');
  const value = await client.sRandMember('jHoopers2', (err, reply) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Random element from myset: ${reply}`);
    }
  });
  console.log(value);
  await client.disconnect();
}

start();
