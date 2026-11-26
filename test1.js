const { test, expect } = require('@playwright/test');

test.describe('Dashboard validation', () => {
	test('TC_DASHBOARD_001: dashboard loads and displays its main content', async ({ page }) => {
		await page.goto('/dashboard');

		await expect(page).toHaveURL(/\/dashboard(?:\/|$)/);
		await expect(page.getByRole('heading', { name: /dashboard/i })).toBeVisible();
		await expect(page.getByRole('main')).toBeVisible();

		const dashboardWidgets = page.locator('[data-testid="dashboard-widget"]');
		await expect(dashboardWidgets.first()).toBeVisible();
		await expect(dashboardWidgets).not.toHaveCount(0);
	});
});
