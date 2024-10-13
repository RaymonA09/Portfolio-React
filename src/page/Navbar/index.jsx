import React from 'react';
import {Link as LinkR} from 'react-router-dom';
import styled, { useTheme } from "styled-components";
import { DiCssdeck} from "react-icons/di";
import { FaBars } from "react-icons/fa";
import AurelioLogo from "../../images/AurelioLogo.jpg";

const Nav = styled.div`
    background-color: ${({theme}) => theme.bg};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
        trastion: 0.8s all ease;
    }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;


const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;

const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px){
        display: block;
        transform: translate (-100%, 50%);
        font-size: 1.8rem;
        cursor: pointer;
        color: ${({ theme }) => theme.text_primary};
    }
    `;


const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.primary};
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 80%;
    height: 100%;
    padding; 0 6px;
    @media screen and (max-width: 768px) {
        display:none;
    }
`;


const GithubButton = styled.a`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: ${({ theme }) => theme.primary};
    border: 1.8px solid ${({ theme }) => theme.primary};
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    height: 70%;
    :hover {
        background-color: ${({theme}) => theme.primary};
        color: ${({ theme }) => theme.black};
    }

    @media screen and (max-width: 768px) {
        font-size: 0.8rem;

    }
`
const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.3);
  opacity: ${({ open }) => (open ? "1" : "0")};
  z-index: ${({ open }) => (open ? "1" : "-1")};
`;


const MobileMenuLinks = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2 ease-in-out;
    &:hover {
        color: ${({ theme }) => theme.primary};
        };
`
export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;

const Img = styled.img`
    max-width: 75%;
    min-width: 60%;

    @media (max-width: 869px){
        max-width:80%;
    }
    @media (max-width: 768px){
        max-width: 40%;
    }
`;

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
  return ( 
  <Nav>
    <NavbarContainer>
        <NavLogo to="/">
            <a 
            href='/'
            style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                marginBottom: "20;",
                cursor: "pointer",
            }}>
                <Img src={AurelioLogo} alt="Raymon" />
            </a>
        </NavLogo>
        <MobileIcon>
            <FaBars
                onClick={() => setOpen(!open)}
            /> 
        </MobileIcon>
        <NavItems>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
        </NavItems>

        <ButtonContainer>
          <GithubButton href="https://github.com/RaymonA09" target="_blank">Github Profile</GithubButton>
        </ButtonContainer>
        </NavbarContainer>
        {open && (
                <MobileMenu open={open}>
                    <MobileMenuLinks href="#about" onClick={() => setOpen(!open)}>About</MobileMenuLinks>
                    <MobileMenuLinks href="#skills" onClick={() => setOpen(!open)}>Skills</MobileMenuLinks>
                    <MobileMenuLinks href="#projects" onClick={() => setOpen(!open)}>Projects</MobileMenuLinks>
                    <MobileMenuLinks href="#contact" onClick={() => setOpen(!open)}>Contact</MobileMenuLinks>
                    <GithubButton 
                        style={{
                            padding: '10px 16px',
                            background: `${theme.primary}`,
                            color: 'white',
                            width: 'max-content'
                        }} 
                        href="https://github.com/RaymonA09" 
                        target="_blank"
                    >
                        Github Profile
                    </GithubButton>
                </MobileMenu>
            )}
    </Nav>
    );
};

export default Navbar;
