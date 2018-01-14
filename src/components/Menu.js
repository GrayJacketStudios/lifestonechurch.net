import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import Burger from './Burger';
import * as COLORS from '../constants/colors';

const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: flex-end;
  & li {
    position: relative;
    padding: 5px;
    color: ${COLORS.BRAND};
    cursor: pointer;
    & a {
      text-decoration: none;
      color: ${COLORS.BRAND};
    }
  }
`;
const SubNav = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  padding: 0;
  min-width: 160px
  list-style: none;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  background: white;
  &.open {
    z-index: 1;
    max-height: 1000px;
    opacity: 1;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  }
`;

const Item = styled.div`
  display: flex;
`;

const Caret = styled.div`
  width: 1.5rem;
`;

class Menu extends React.Component {
  state = {
    openItem: -1,
  };

  handleMobileToggle = isOpen => {
    console.log(isOpen);
  };

  handleItemClick = openItem => {
    this.setState({
      openItem: this.state.openItem === openItem ? -1 : openItem,
    });
  };

  render() {
    const { children, navigation } = this.props;
    return (
      <Nav>
        {navigation.map((a, i) => (
          <li key={i}>
            {a.path ? (
              <Link to={a.path} onClick={() => this.handleItemClick(i)}>
                {a.name}
              </Link>
            ) : (
              <Item>
                <div onClick={() => this.handleItemClick(i)}>{a.name}</div>
                <Caret>
                  <svg viewBox="0 0 64 64">
                    <title>Icons 100</title>
                    <path
                      d="M18.4 28.6L32 42.2l13.6-13.6H18.4z"
                      fill={COLORS.BRAND}
                    />
                  </svg>
                </Caret>
              </Item>
            )}
            {a.children && (
              <SubNav className={this.state.openItem === i ? 'open' : ''}>
                {a.children.map((b, j) => (
                  <li key={j}>
                    <Link to={b.path}>{b.name}</Link>
                  </li>
                ))}
              </SubNav>
            )}
          </li>
        ))}
        <Burger color={COLORS.BRAND} onClick={this.handleMobileToggle} />
      </Nav>
    );
  }
}

Menu.propTypes = {
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string,
      children: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          path: PropTypes.string,
        })
      ),
    })
  ).isRequired,
};

export default Menu;