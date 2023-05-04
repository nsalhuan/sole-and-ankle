import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoDiv>
          <Logo />
        </LogoDiv>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
      </MainHeader>
    </header>
  );
};

// TODO: This is not super dynamic
const MainHeader = styled.div`
  padding: 0 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerHeaderDiv = styled.div`
  display: flex;
  align-items: baseline;
`;

const LogoDiv = styled.div`
  left: 32px;
  top: 0;
  bottom: 0;
  height: fit-content;
  margin-top: auto;
  margin-bottom: auto;
  position: absolute;
`;

const Nav = styled.nav`
  display: flex;
  /* padding: 0 370px; */
  /* justify-content: space-between; */
  gap: 48px;
  justify-content: center;
  /* align-self: center; */
  /* flex: 1; */
  margin-top: 3px;
  /* margin-left: 200px; */
  flex-basis: content;
  /* padding-left: 200px; */
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
