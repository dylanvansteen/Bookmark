import { BookmarkWebsitePage } from './app.po';

describe('bookmark-website App', function() {
  let page: BookmarkWebsitePage;

  beforeEach(() => {
    page = new BookmarkWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
