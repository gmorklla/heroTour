import { browser, element, by } from 'protractor/globals';

export class PruebaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('p-root h1')).getText();
  }
}
