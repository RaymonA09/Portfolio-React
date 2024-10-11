import styled from "styled-components";
import { skills } from '../../data/constants';
import { Tilt } from 'react-tilt'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding-bottom: 100px;

  @media (max-width: 1024px){
    padding-bottom: 80px;
  }

    @media screen and (max-width: 960px) {
    padding-bottom: 50px;
  } 

  @media screen and (max-width: 480px) {
    padding-bottom: 50px;
  }
`;

const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top; 12px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px){
    font-size: 35px;
  }

  @media (max-width: 480px){
    font-size: 30px;
  }
`;

const Description = styled.div`
  font-size: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px){
    font-size: 16px;
  }

  @media (max-width: 480px){
    padding: 0px 5px;
  }


`;

const Skillscontainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: center;
  gap: 30px;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  background-color: rgba(17,25,40,0.83);
  border: 1px solid rgba(255,255,255,0.125);
  border-radius: 16px;
  padding: 18px 36px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;

  @media (max-width: 1024px){
    max-width: 400px;
  }

  @media (max-width: 960px){
    max-width: 500px;
  }

  @media (max-width: 768px){
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 480px){
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap:12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary+80};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  padding: 12px 16px;
  font-weight: 400;

  @media (max-width: 768px) {
     font-size: 14px;
     padding: 8px 12px;
  }

  @media (max-width 500px) {
    font-size: 14px;
    padding: 6px 8px;
  }
`;


const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;



const Skills = () => {
  return (
    <Container id = "skills">
      <Wrapper> 
        <Title> Skills </Title>
        <Description>Front-end and Backend Development with 2 Years of Experience</Description>

        <Skillscontainer>
          {skills.map((item) => (
          <Tilt>
            <Skill> 
              <SkillTitle>{item.title}</SkillTitle> 
              <SkillList>
                {
                  item.skills.map(skill => (
                    <SkillItem>  
                      <SkillImage src={skill.image} />
                      {skill.name}
                    </SkillItem>
                  ))
                }
              </SkillList>
            </Skill>
          </Tilt>
          ))}
        </Skillscontainer>
      </Wrapper>
    </Container>
  )
}

export default Skills