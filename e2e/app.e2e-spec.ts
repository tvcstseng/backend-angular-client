import { BackendAngularClientPage } from './app.po';

describe('backend-angular-client App', () => {
  let page: BackendAngularClientPage;

  beforeEach(() => {
    page = new BackendAngularClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
