import { PlfPage } from './app.po';

describe('plf App', () => {
  let page: PlfPage;

  beforeEach(() => {
    page = new PlfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
