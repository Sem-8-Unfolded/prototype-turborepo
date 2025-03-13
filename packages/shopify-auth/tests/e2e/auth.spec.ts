import { test, expect } from '@playwright/test';

test('can login', async ({ page }) => {
    await page.goto('http://localhost:3000/login');

    await page.getByText('Sign in').click();
    await page.waitForURL("http://localhost:3000");

    await expect(page.getByText('Bzbz')).toBeVisible();
});

test('can logout', async ({ page }) => {
    await page.goto('http://localhost:3000/login');

    await page.getByText('Sign in').click();
    await page.waitForURL("http://localhost:3000");

    await page.getByText('Logout').click();
    await page.waitForURL("http://localhost:3000");

    await expect(page.getByText('Login')).toBeVisible();
});