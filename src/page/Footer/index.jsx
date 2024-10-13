import styled from "styled-components";
import { Bio } from '../../data/constants';
import { icons } from '../../data/constants';

const Container = styled.div`
    background: ${({ theme }) => theme.bg};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;

    @media (max-width: 1024px){
      padding-top: 80px;
  }

      @media screen and (max-width: 960px) {
    padding-top: 75px;
  } 

  @media screen and (max-width: 480px) {
    padding-bottom: 50px;
  }
`;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 70%;
align-items: center;
gap: 15px;
`;

const Name = styled.div`
    font-size: 1.25rem;
    font-weight: 600;
    color: rgb(133, 76, 230);
    letter-spacing: 0.05em;
`;

const FooterItems = styled.ul`
	font-size: 1.2rem;    
    display: flex;
    gap: 20px;
    color: rgb(255, 213, 137);
`;

const FooterLinks = styled.a`
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

const IconDisplay = styled.div`
    display: flex;
    gap: 20px;
    padding-bottom: 20px;
`;

const DetailsIcon = styled.a`
    display: flex;
    align-items: center;
    margin-right: 8px;
    color: ${({ theme }) => theme.white};
    
    :hover {
      color: ${({ theme }) => theme.primary};
    }

`;


const Footer = () => {
    return (
        <Container id = "footer">
            <Wrapper>
                <Name>Ralph Raymon Aurelio</Name>
                <FooterItems>
                    <FooterLinks href="#about">About</FooterLinks>
                    <FooterLinks href="#skills">Skills</FooterLinks>
                    <FooterLinks href="#projects">Projects</FooterLinks>
                    <FooterLinks href="#contact">Contact</FooterLinks>
                </FooterItems>

                <IconDisplay>
                    <DetailsIcon style={{ width: "24px", height: "24px" }} href={Bio.facebook} target="_blank" rel="noopener noreferrer">{icons.facebook}</DetailsIcon>
                    <DetailsIcon style={{ width: "24px", height: "24px" }} href={Bio.github} target="_blank" rel="noopener noreferrer">{icons.github}</DetailsIcon>
                    <DetailsIcon style={{ width: "24px", height: "24px" }} href={Bio.linkedin} target="_blank" rel="noopener noreferrer">{icons.linkedin}</DetailsIcon>
                </IconDisplay>

                <span className = "text-white">© 2024 Ralph Raymon Aurelio. All rights reserved.</span>

            </Wrapper>
        </Container>
    )
  }

  export default Footer;