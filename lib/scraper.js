require('dotenv').config();
import puppeteer from "puppeteer";
import fs from "fs";

const getPlayers = async () => {
  let players = [];
  for (let i = 65; i <= 90; i++) {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
    });
    const page = await browser.newPage();
    const url = `https://www.basketball-reference.com/players/${String.fromCharCode(i).toLowerCase()}/`;
    console.log(url);
    await page.goto(url, {
      waitUntil: "domcontentloaded",
    });
    const currentPlayers = await page.evaluate(() => {
      const playerList = document.querySelectorAll('#all_players table tbody tr');
      return Array.from(playerList).map((quote) => {
        const player = quote.querySelector(".left a").innerText;
        return player;
      })
    });
    players.push(currentPlayers);
    await browser.close();
  }
  
  const data = JSON.stringify(players.flat(1));
  fs.writeFile("playerArray.json", data, (err) => {
    if (err) throw err;
    console.log("data written to file");
  });
};

getPlayers();
