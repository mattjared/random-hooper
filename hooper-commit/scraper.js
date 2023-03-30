import puppeteer from "puppeteer";
import fs from "fs";

const getPlayers = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();
  const url = 'https://www.basketball-reference.com/players/j/';
  await page.goto(url, {
    waitUntil: "domcontentloaded",
  });

  const players = await page.evaluate(() => {
    const playerList = document.querySelectorAll('#all_players table tbody tr');
    
    return Array.from(playerList).map((quote) => {
      const player = quote.querySelector(".left a").innerText;
      return player;
    })
  });

  await browser.close();
  const data = JSON.stringify(players);
  fs.writeFile("myArray.json", data, (err) => {
    if (err) throw err;
    console.log("data written to file");
  });

};

getPlayers();
