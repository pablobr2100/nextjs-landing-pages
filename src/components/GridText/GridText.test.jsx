import { GridText } from '.';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<GridText />', () => {
  it('should render grid text section', () => {
    const { container } = renderTheme(<GridText {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render grid text section without background', () => {
    const { container } = renderTheme(
      <GridText {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
