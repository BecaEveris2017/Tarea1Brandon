import { Tarea1Page } from './app.po';

describe('tarea1 App', function() {
  let page: Tarea1Page;

  beforeEach(() => {
    page = new Tarea1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
