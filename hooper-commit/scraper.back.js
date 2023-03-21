// let replacedStr = str.replace(/storage/g, "Cache");


const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  const url = 'https://www.basketball-reference.com/players/j/';
  await page.goto(url);

  const playerNames = await page.evaluate(() => {
    const playerNames = [];
    // const rows = document.querySelectorAll('table tbody tr');
    const rows = document.querySelectorAll('#all_players table tbody tr');

    rows.forEach(row => {
      const playerName = row.querySelector('td[data-stat="player"] a').textContent.trim();
      if (playerName) {
        playerNames.push(playerName);
      }
    });
    return playerNames;
  });

  console.log(playerNames); // array of player names

  await browser.close();
})();


const puppeteer = require('puppeteer');

(async () => {
  const url = 'https://www.basketball-reference.com/players/j/';
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);
  // await page.screenshot({path: 'example.png'});
  const rows = await page.evaluate(() => {
    document.querySelectorAll('#all_players table tbody tr');
  });
	console.log(rows);
	await browser.close();
})();



//////////////////// 
/// WORKING EXAMPLE
//////////////////////


import puppeteer from "puppeteer";

const getQuotes = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();
  // const url = 'https://www.basketball-reference.com/players/j/';
  const url = "http://quotes.toscrape.com/";
  await page.goto(url, {
    waitUntil: "domcontentloaded",
  });

  const quotes = await page.evaluate(() => {
    const quoteList = document.querySelectorAll(".quote");
    
    return Array.from(quoteList).map((quote) => {
      const text = quote.querySelector(".text").innerText;
      const author = quote.querySelector(".author").innerText;
      return { text, author };
    })
  });

  console.log(quotes);

  await browser.close();
};

// Start the scraping
getQuotes();