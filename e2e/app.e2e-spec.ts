import { CVitaePage } from './app.po';

describe('c-vitae App', () => {
  let page: CVitaePage;

  beforeEach(() => {
    page = new CVitaePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
