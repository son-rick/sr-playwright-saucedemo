import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly cartItem: Locator;

  constructor(private page: Page) {
    this.cartItem = page.getByTestId('inventory-item');
  }

}
