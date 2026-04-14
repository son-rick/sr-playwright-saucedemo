import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly addBackpackButton: Locator;
  readonly cartLink: Locator;

  constructor(private page: Page) {
    this.addBackpackButton = page.locator('#add-to-cart-sauce-labs-backpack');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async addBackpackToCart() {
    await expect(this.addBackpackButton).toBeVisible();
    await this.addBackpackButton.click();
  }

  async goToCart() {
    await expect(this.cartLink).toBeVisible();
    await this.cartLink.click();
  }
}
