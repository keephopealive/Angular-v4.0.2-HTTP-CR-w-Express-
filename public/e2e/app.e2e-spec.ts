import { WidgetsAppPage } from './app.po';

describe('widgets-app App', () => {
  let page: WidgetsAppPage;

  beforeEach(() => {
    page = new WidgetsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
