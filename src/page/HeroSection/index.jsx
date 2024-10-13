import styled from "styled-components";
import { Bio } from '../../data/constants';
import Typewriter from "typewriter-effect";
import raymon from "../../images/raymon.jpg";
import AnimatedBackground from '../Background/index';
import { Tilt } from 'react-tilt'


const HeroContainer = styled.div`
  background-color: ${({ theme }) => theme.card.light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 100px 30px 0px 30px;

  @media screen and (max-width: 960px) {
    padding: 40px 16px 0px;
  } 

  @media screen and (max-width: 480px) {
    padding: 16px 16px;
  }

  z-index: 1;
;`

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 60%;
  left: 75%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%); /* Center both vertically and horizontally */
  z-index: -1;
  overflow: hidden;

  @media screen and (max-width: 2100px) {
    left: 70%;
  }

  @media screen and (max-width: 1800px) {
    left: 73%;
  }

  @media screen and (max-width: 1440px) {
    left: 75%;
  }

  @media screen and (max-width: 1200px) {
    left: 80%;
  }

  @media screen and (max-width: 1087px) {
    top: 65%;
    left: 80%;
  }

  @media screen and (max-width: 960px) {
    top: 45%;
    left: 50%;
    width: 50%;
  }

  @media screen and (max-width: 768px) {
    top: 45%;
    left: 50%;
    width: 60%;
    
  }

    @media screen and (max-width: 610px) {
    top: 50%;
    left: 50%;
    width: 70%;
  }

`;


const HeroInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
;`

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;

  @media screen and (max-width: 1024px) {
    padding-left: 20px;
  }

  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media screen and (max-width: 640px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
;`

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  gap: 12px;

  @media screen and (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 640px) {
    order: 1;
    margin-bottom: 30px;
  }
;`

const Title = styled.div`
  font-size: 45px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media screen and (max-width: 1024px){
    font-size: 40px;
  }

  @media screen and (max-width: 960px) {
    line-height: 50px;
    font-size: 35px;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    font-size: 35px;
    line-height: 40px;
    margin-bottom: 8px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
    line-height: 45px;
    margin-bottom: 8px;
  }

  @media screen and (max-width: 395px){
    font-size: 26px;
  }
  
  @media screen and (max-width: 375px) {
    font-size: 24px;
  }

;`

const TextLoop = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 68px;
  gap: 12px;
  display: flex;

  @media screen and (max-width: 1024px){
    font-size: 28px;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 8px;
  }

  @media screen and (max-width: 375px) {
    font-size: 20px;
  }
;`

const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;

  }
;`

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + '95'};
  line-height: 32px;
  margin-bottom: 32px;

  @media screen and (max-width: 1024px){
    font-size: 18px;
    line-height: 28px;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
    margin-bottom: 24px;
  }
`;


const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color: ${({ theme }) => theme.black};
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.2s ease-in-out !important;
  background: linear-gradient(225deg, #f7bd6c 0%, #eac085 100%);
  box-shadow: 20px 20px 60px #1F2634, -20px -20px 60px #1F2634;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1F2634;
    filter: brightness(1);
  }

  @media (max-width: 768px) {
    padding: 12px 0;
    font-size: 18px;
  }
;`

const Img = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 50%;
  max-width: 380px;
  max-height: 380px;
  object-fit: cover;
  object-position: center;
  border: 3px solid ${({ theme }) => theme.primary};
  z-index: 1; /* Ensure the image is above the HeroBg */
  

  transition: transform 0.3s ease-in-out; /* Smooth transition for scaling */
  &:hover {
    transform: scale(1); /* Enlarge the image by 10% */
  }

  @media screen and (max-width: 960px) {
    max-height: 330px;
    max-width: 330px;
  }

  @media screen and (max-width: 768px) {
    max-height: 280px;
    max-width: 280px;
  }

    @media screen and (max-width: 435px) {
    max-height: 230px;
    max-width: 230px;
  }

    @media screen and (max-width: 375px) {
    max-height: 200px;
    max-width: 200px;
  }
;`


// Hero Component
const Hero = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              Hi, I am <br />
              {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter 
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="_blank" rel="noopener noreferrer">Check Resume</ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer>
            <Tilt>              
            <Img src={raymon} alt="Raymon" />
            </Tilt>

            <HeroBg>
          <AnimatedBackground />
        </HeroBg>

          </HeroRightContainer>

        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
}

export default Hero;