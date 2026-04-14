import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { users } from '../../utils/test-data';

test('Login inválido', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('/');

  await loginPage.invalidLogin( users.invalidUser.username,users.invalidUser.password);
  
});
