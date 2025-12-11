
export class InfoBlockPage {
  constructor(page) {
    this.page = page;
  }

  async navigateTo(linkText) {
    await this.page.getByRole('link', { name: linkText }).click();
  }

  getHeading(headingText) {
    return this.page.getByRole('heading', { name: headingText });
  }
}



