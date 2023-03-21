import puppeteer from "puppeteer";

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
      // const author = quote.querySelector(".author").innerText;
      return player;
    })
  });

  console.log(players);

  await browser.close();
};

// Start the scraping
getPlayers();