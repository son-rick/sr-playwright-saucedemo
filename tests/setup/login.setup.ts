import { test as setup } from '@playwright/test';
import { users } from '../../utils/test-data';

setup('login', async ({ page }) => {
  await page.goto('/');

  await page.fill('#user-name', users.validUser.username);
  await page.fill('#password', users.validUser.password);
  await page.click('#login-button');

  await page.waitForURL('/inventory.html');

  await page.context().storageState({
    path: 'storage/storageState.json'
  });
});
