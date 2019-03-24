const puppeteer = require('puppeteer');
let browser, page;

beforeAll(async () => {
  browser = await puppeteer.launch({ headless: true })
  page = await browser.newPage();
  await page.goto("http://localhost:3000/")
})

afterAll(async () => {
  await browser.close()
})

test('Validates a input password is between 8-64 characters', async () => {
  await page.type(".password", "123");
  await page.click(".submit", { delay: 200 });
  let element = await page.$("span");
  let text = await page.evaluate(element => element.textContent, element);
  expect(text).toBe("Password should be original combination of ASCii characters greater than 8 and less than 64 in length");
});

test('Validates a input password is only ASCII characters', async () => {
  await page.type(".password", "£¥€™®©€±π");
  await page.click(".submit", { delay: 200 });
  const element = await page.$("span");
  const text = await page.evaluate(element => element.textContent, element);
  expect(text).toBe("Password should be original combination of ASCii characters greater than 8 and less than 64 in length");
});

test('Validates a input password is not in the common passwords collection', async () => {
  await page.type(".password", "123123");
  await page.click(".submit", { delay: 200 });
  const element = await page.$("span");
  const text = await page.evaluate(element => element.textContent, element);
  expect(text).toBe("Password should be original combination of ASCii characters greater than 8 and less than 64 in length");
});


test('Input password does not go outside of window', async () => {
  const reqsBefore = await page.metrics();
  await page.type(".password", "123123");
  await page.click(".submit", { delay: 200 });
  const reqsAfter = await page.metrics();
  expect(reqsBefore.Documents).toBe(reqsAfter.Documents);
});
