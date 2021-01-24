import PropTypes from 'prop-types';

const Header = ({ children }) => <h1 style={{ color: '#0384E2' }}>{children}</h1>;

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Header;
