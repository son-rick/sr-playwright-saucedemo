import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async login(user: string, password: string) {
    await this.page.fill('#user-name', user);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  }
}
