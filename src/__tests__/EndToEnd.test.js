import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  });
  // Feature 2, scenario 1
  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .event-details');
    expect(eventDetails).toBeNull();
  });
  // Feature 2, scenario 2
  test('User can expand an event to see its details', async () => {
    await page.click('.event .show-hide-btn');
    const eventDetails = await page.$('.event .event-details');
    expect(eventDetails).toBeDefined();
  });
  // Feature 2, scenario 3
  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .show-hide-btn');
    const eventDetails = await page.$('.event .event-details');
    expect(eventDetails).toBeNull();
  });
});