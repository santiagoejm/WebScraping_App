const puppeteer = require("puppeteer");
const fs = require("fs/promises");

const coinMCScraper = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--window-size=800,600"],
  });
  const page = await browser.newPage();
  await page.goto("https://coinmarketcap.com/");

  await page.evaluate(scrollToBottom);
  await page.waitForTimeout(3000);

  const coinName = await page.evaluate(() => {
    return Array.from(
      document.querySelectorAll(
        "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div > div.h7vnx2-1.bFzXgL > table > tbody > tr > td:nth-child(3) > div > a > div > div > p"
      )
    ).map((x) => x.textContent);
  });

  const coinSign = await page.evaluate(() => {
    return Array.from(
      document.querySelectorAll(
        "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div > div.h7vnx2-1.bFzXgL > table > tbody > tr > td:nth-child(3) > div > a > div > div > div > p"
      )
    ).map((x) => x.textContent);
  });

  const coinMarketCap = await page.evaluate(() => {
    return Array.from(
      document.querySelectorAll(
        "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div > div.h7vnx2-1.bFzXgL > table > tbody > tr > td:nth-child(7) > p > span.sc-1ow4cwt-1.ieFnWP"
      )
    ).map((x) => x.textContent);
  });

  const top100Coins = [];
  for (let i = 0; i < 100; i++) {
    let coin = `Coin: ${coinName[i]} * Sign: ${coinSign[i]} * MarketCap: ${coinMarketCap[i]}`;
    top100Coins.push(coin);
  }

  await fs.writeFile("top100crypto.txt", top100Coins.join("\r\n\n"));

  await browser.close();
};

const scrollToBottom = async () => {
  await new Promise((resolve) => {
    const distance = 100;
    const delay = 100;
    const timer = setInterval(() => {
      document.scrollingElement.scrollBy(0, distance);
      if (
        document.scrollingElement.scrollTop + window.innerHeight >=
        document.scrollingElement.scrollHeight
      ) {
        clearInterval(timer);
        resolve();
      }
    }, delay);
  });
};

coinMCScraper();
