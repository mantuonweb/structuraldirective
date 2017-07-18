import { StructuraldirectivePage } from './app.po';

describe('structuraldirective App', () => {
  let page: StructuraldirectivePage;

  beforeEach(() => {
    page = new StructuraldirectivePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
