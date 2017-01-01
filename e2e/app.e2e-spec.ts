import { AlbumArtGridPage } from './app.po';

describe('album-art-grid App', function() {
  let page: AlbumArtGridPage;

  beforeEach(() => {
    page = new AlbumArtGridPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
