const { test, expect } = require('@playwright/test');

test('user can log in', async ({ page }) => {
	const baseURL = process.env.BASE_URL;
	const username = process.env.LOGIN_USERNAME;
	const password = process.env.LOGIN_PASSWORD;

	if (!baseURL || !username || !password) {
		throw new Error('Set BASE_URL, LOGIN_USERNAME, and LOGIN_PASSWORD before running this test.');
	}

	await page.goto(baseURL);
	await page.getByLabel(/email|username/i).fill(username);
	await page.getByLabel(/password/i).fill(password);
	await page.getByRole('button', { name: /log in|sign in/i }).click();

	await expect(page).toHaveURL(/dashboard|home/i);
});
