import { Base } from '.';
import { renderTheme } from '../../styles/render-theme';
import mock from './mock';

describe('<Base />', () => {
  it('should render a base template', () => {
    const { container } = renderTheme(<Base {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
