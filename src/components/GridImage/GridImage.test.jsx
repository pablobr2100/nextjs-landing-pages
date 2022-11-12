import { GridImage } from '.';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<GridImage />', () => {
  it('should render grid text section', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render grid text section without background', () => {
    const { container } = renderTheme(
      <GridImage {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
