import { screen } from '@testing-library/react';

import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<LogoLink />', () => {
  it('should render text-logo', () => {
    renderTheme(<LogoLink link="#target" text="LOGO" />);
    expect(screen.getByRole('heading', { name: 'LOGO' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'LOGO' })).toHaveAttribute(
      'href',
      '#target',
    );
  });

  it('should render image-logo', () => {
    renderTheme(<LogoLink link="#target" text="LOGO" srcImg="image.jpg" />);
    expect(screen.getByAltText('LOGO')).toHaveAttribute('src', 'image.jpg');
  });

  it('should render image-logo', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="LOGO" srcImg="image.jpg" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
