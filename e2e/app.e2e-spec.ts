import { LifxPage } from './app.po';

describe('lifx App', function() {
  let page: LifxPage;

  beforeEach(() => {
    page = new LifxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
