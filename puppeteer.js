require('dotenv').config({ path: './config/.env' });
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    devtools: true,
    defaultViewport: null,
    args: ['--disable-infobars', '--start-maximized', '--disable-web-security'],
  });
  const pages = await browser.pages();
  const page = pages[0];
  const url = process.env.BASE_URL || 'http://localhost:3000';

  await page.setBypassCSP(true);
  await page.goto(url, {
    waitUntil: 'networkidle2',
  });
  // await page.pdf({ path: 'hn.pdf', format: 'A4' });
  // await browser.close();
})();
