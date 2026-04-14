import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { test, expect } from '@playwright/test';

let inventoryPage: InventoryPage;
let cartPage: CartPage;

test.beforeEach(async ({ page }) => {
  inventoryPage = new InventoryPage(page);
  cartPage = new CartPage(page);

  await page.goto('/inventory.html');
});

test('Adicionar mochila ao carrinho', async ({ page }) => {
  await page.waitForURL('/inventory.html');

  await inventoryPage.addBackpackToCart();
  await inventoryPage.goToCart();
  await expect(page).toHaveURL('/cart.html');
});
