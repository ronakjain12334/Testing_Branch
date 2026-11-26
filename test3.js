const { chromium } = require('playwright');

async function searchFlipkart(query) {
	const browser = await chromium.launch({ headless: false });
	const page = await browser.newPage();

	try {
		await page.goto('https://www.flipkart.com', { waitUntil: 'domcontentloaded' });
		const searchBox = page.locator('input[name="q"]');
		await searchBox.waitFor({ state: 'visible' });
		await searchBox.fill(query);
		await searchBox.press('Enter');
		await page.waitForLoadState('domcontentloaded');
	} finally {
		await browser.close();
	}
}

searchFlipkart('laptop').catch(console.error);
