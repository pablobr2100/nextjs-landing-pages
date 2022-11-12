import Home from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Home />', () => {
  it('should render home page', () => {
    renderTheme(<Home />);
  });
});
