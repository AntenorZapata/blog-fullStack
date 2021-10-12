import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPooStorm, FaTimes, FaBars } from 'react-icons/fa';
import { SiAudiotechnica } from 'react-icons/si';
import { Container } from '../globalStyles';
import { Link } from 'react-router-dom';

function NavBar() {
  const [click, setClick] = useState(false);

  const handleShowNav = () => {
    setClick((prev) => !prev);
  };
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <SiAudiotechnica /> TechToday
          </NavLogo>
          <MobileIcon onClick={handleShowNav}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleShowNav} click={click}>
            <NavItem>
              <NavLinks to='/'>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/blog'>Blog</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact'>Contato</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

const Nav = styled.div`
  background-color: #000;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  top: 0;
  position: sticky;
  z-index: 999;
`;

const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

const NavLogo = styled(Link)`
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-self: start;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
`;

const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    transition: all 0.4s ease;
    background-color: #000;
  }
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 600;
  height: 100%;
  padding: 1rem 1rem;

  &:hover {
    color: #9ea5f39f;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

const MobileIcon = styled.div`
  display: none;
  color: #fff;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.8rem;
    cursor: pointer;
    transform: translate(-100%, 60%);
  }
`;

// const NavIcon = styled(FaPooStorm);

export default NavBar;
