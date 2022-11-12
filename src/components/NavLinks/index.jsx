import P from 'prop-types';
import { Container } from './styles';
import { MenuLink } from '../MenuLink';

export const NavLinks = ({ links = [] }) => {
  return (
    <Container aria-label="Main Menu">
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </Container>
  );
};

NavLinks.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.node.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    }),
  ),
};
