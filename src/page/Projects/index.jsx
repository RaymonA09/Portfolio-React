import styled from "styled-components";
import { projects } from '../../data/projectinfo';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding-top: 100px;

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
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top; 12px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px){
    margin-top: 12px;
    font-size:32px;
  }
`;

const Description = styled.div`
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px){
    font-size: 16px;
  }
`;

const ProjectsConCtainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  justify-content: center;
  gap: 30px;
`;

const ProjectsCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 450px;
  max-width: 500px;
  background-color: rgb(23, 23, 33);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 12px 4px;
  border-radius: 16px;
  padding: 26px 20px;
  gap: 14px;

  @media (max-width: 768px){
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px){
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const ProjectsImage = styled.img`
  width: 30%;
  max-height: 50%;
  postition: relative;
  border-radius: 5px;
  border-color: #854ce6;
  margin-bottom: 15px;
`;

const ProjectsInfo  = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ProjectsTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: rgb(177, 178, 179);
`;

const ProjectsDate = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary+80};
`;

const ProjectsDescription = styled.div`
  margin-top:8px;
  font-weight: 300;
  color: ${({ theme }) => theme.text_primary+90};
`;

const Projects = () => {
    return (
        <Container id = "projects">
            <Wrapper>
                <Title>
                    Projects
                </Title>
                <Description>Here are some Projects I made during the 3 years Experience in Web development</Description>

                <Carousel opts = {{ align: "start",}}
                  className="flex justify-center items-center mt-8">
                    
                <CarouselContent>

                    {projects.map((item, index) => (
                      <CarouselItem key={index} index={index} className="md:basis-1/1 lg:basis-1/1 "> 
                        <ProjectsImage src={item.image} alt={item.title} />

                        <ProjectsInfo>
                          <ProjectsTitle>{item.title}</ProjectsTitle>
                          <ProjectsDate>{item.date}</ProjectsDate>
                          <ProjectsDescription>{item.description}</ProjectsDescription>
                        </ProjectsInfo>
                      </CarouselItem>
                    ))}
                </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>


            </Wrapper>
            </Container>
    )
  }



  
  export default Projects;