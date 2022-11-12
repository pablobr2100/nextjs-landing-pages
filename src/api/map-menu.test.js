import { mapMenu, mapMenuLinks } from './map-menu';

describe('map-menu', () => {
  it('should return a predefined object if there is no data', () => {
    const menu = mapMenu();
    expect(menu.text).toBe('');
    expect(menu.link).toBe('');
    expect(menu.srcImg).toBe('');
  });

  it('should map menu to match keys and values required', () => {
    const menu = mapMenu({
      logo_text: 'Landing Page',
      logo_link: '#home',
      menu: [
        {
          open_in_new_tab: false,
          link_text: 'pricing',
          url: '#pricing',
        },
        {
          open_in_new_tab: false,
          link_text: 'contact',
          url: '#contact',
        },
      ],
      logo: {
        data: {
          attributes: {
            url: 'a.svg',
          },
        },
      },
    });
    expect(menu.text).toBe('Landing Page');
    expect(menu.link).toBe('#home');
    expect(menu.srcImg).toBe('a.svg');
    expect(menu.links[0].children).toBe('pricing');
    expect(menu.links[0].link).toBe('#pricing');
  });

  it('should return a empty array if there is no links', () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });

  it('should map links if there is links', () => {
    const links = mapMenuLinks([
      {
        open_in_new_tab: false,
        link_text: 'pricing',
        url: '#pricing',
      },
      {},
    ]);

    expect(links[0].newTab).toBe(false);
    expect(links[0].children).toBe('pricing');
    expect(links[0].link).toBe('#pricing');
  });
});
