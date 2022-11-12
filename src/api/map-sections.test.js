import {
  mapImageGrid,
  mapSectionContent,
  mapSections,
  mapSectionTwoColumns,
  mapTextGrid,
} from './map-sections';

import fakeData from './data.json';

describe('map-sections', () => {
  it('should render a predefined section if there is no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should render sections with correct data', () => {
    const data = mapSections(fakeData.data[0].attributes.sections);
    expect(data[0].component).toBe('section.section-two-columns');
  });

  it('should test section with invalid data', () => {
    const noTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
      },
    ]);

    const withNoComponent = mapSections([{}]);

    expect(noTextOrImageGrid).toEqual([
      {
        __component: 'section.section-grid',
      },
    ]);
    expect(withNoComponent).toEqual([{}]);
  });

  it('should test section.section-grid with no image_grid or text_grid', () => {
    const noTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
        image_grid: [{}],
      },
      {
        __component: 'section.section-grid',
        text_grid: [{}],
      },
    ]);
    expect(noTextOrImageGrid.length).toBe(2);
  });

  it('should map section two columns with no data', () => {
    const data = mapSectionTwoColumns();

    expect(data.component).toBe('');
    expect(data.title).toBe('');
    expect(data.text).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });

  it('should map section two columns with data', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      title: 'title',
      description: 'abc',
      metadata: {
        background: true,
        section_id: 'contact',
      },
      image: {
        data: {
          attributes: {
            url: 'a.svg',
          },
        },
      },
    });

    expect(data.component).toBe('section.section-two-columns');
    expect(data.title).toBe('title');
    expect(data.text).toBe('abc');
    expect(data.srcImg).toBe('a.svg');
    expect(data.background).toBe(true);
    expect(data.sectionId).toBe('contact');
  });

  it('should map section content with no data', () => {
    const data = mapSectionContent();

    expect(data.component).toBe('');
    expect(data.title).toBe('');
    expect(data.html).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });

  it('should map section content with data', () => {
    const data = mapSectionContent({
      __component: 'section.section-content',
      title: 'Pricing',
      content: 'abc',
      metadata: {
        background: false,
        section_id: 'pricing',
      },
    });

    expect(data.component).toBe('section.section-content');
    expect(data.title).toBe('Pricing');
    expect(data.html).toBe('abc');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('pricing');
  });

  it('should map grid text with no data', () => {
    const data = mapTextGrid(undefined);

    expect(data.component).toBe('section.section-grid-text');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });

  it('should map grid text with data', () => {
    const data = mapTextGrid({
      __component: 'section.section-grid',
      description: 'abc',
      title: 'My Grid',
      text_grid: [
        {
          title: 'Teste 1',
          description: 'Coisa',
        },
        {
          title: 'Teste 2',
          description: 'abc',
        },
      ],
      image_grid: [],
      metadata: {
        background: true,
        section_id: 'grid-one',
      },
    });

    expect(data.component).toBe('section.section-grid-text');
    expect(data.title).toBe('My Grid');
    expect(data.description).toBe('abc');
    expect(data.background).toBe(true);
    expect(data.sectionId).toBe('grid-one');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe('Coisa');
  });

  it('should map grid image with no data', () => {
    const data = mapImageGrid(undefined);

    expect(data.component).toBe('section.section-grid-image');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });

  it('should map grid image with data', () => {
    const dataGrid = mapImageGrid({
      __component: 'section.section-grid',
      title: 'Gallery',
      description: 'abc',
      text_grid: [],
      image_grid: [
        {
          image: {
            data: [
              {
                attributes: {
                  alternativeText: 'abc',
                  url: 'a.svg',
                },
              },
            ],
          },
        },
      ],
      metadata: {
        background: false,
        name: 'gallery',
        section_id: 'gallery',
      },
    });

    expect(dataGrid.component).toBe('section.section-grid-image');
    expect(dataGrid.title).toBe('Gallery');
    expect(dataGrid.description).toBe('abc');
    expect(dataGrid.background).toBe(false);
    expect(dataGrid.sectionId).toBe('gallery');
    expect(dataGrid.grid[0].altText).toBe('abc');
    expect(dataGrid.grid[0].srcImg).toBe('a.svg');
  });
});
