import { useState } from "react";
import styled from "styled-components";
import { projects } from "../../data/projectinfo";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, X } from "lucide-react";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card"

/* ---------------- STYLES ---------------- */

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Description = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  margin-top: 8px;
`;

const ProjectsCard = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 450px;
  border-radius: 16px;
  overflow: hidden;
  background-color: rgb(23, 23, 33);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 12px 4px;

  @media (max-width: 768px){
    max-width: 400px;
  }

  @media (max-width: 500px){
    max-width: 330px;
  }

`;


const ProjectsImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fit;
  transition: transform 0.4s ease, filter 0.4s ease;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 15, 0.75);
  backdrop-filter: blur(2px);
  transition: opacity 0.3s ease;
  opacity: 0;
`;

const Content = styled.div`
  position: absolute;
  inset: 0;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
`;

const ProjectsTitle = styled.div`
  font-size: 22px;
  font-weight: 600;
`;

const ProjectsDescription = styled.div`
  font-size: 14px;
  margin-top: 10px;
  color: white;
`;

const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 10px;
`;

const StackItem = styled.span`
  padding: 5px 12px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 12px;
  transition: all 0.25s ease;

  /* Default (inactive) */
  color: rgb(133, 76, 230);
  background: rgba(0, 0, 0, 0.10);
  border: 1px solid rgba(133, 76, 230, 0.35);

  /* When card is active (dark background) */
  ${({ $active }) =>
    $active &&
    `
      color: #ffffff;
      background: rgba(133, 76, 230, 0.85);
      border-color: rgba(133, 76, 230, 1);
    `}
`;

const StackRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  gap: 12px;
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 10px;
  border: 1px solid rgba(133, 76, 230, 0.6);
  color: white;
  background: rgba(133, 76, 230, 0.15);
  transition: all 0.25s ease;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background: rgba(133, 76, 230, 0.9);
    transform: translateY(-1px);
  }
`;

/* ---------------- COMPONENT ---------------- */

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);


  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Description>
          A selection of projects showcasing my frontend and full-stack
          development experience
        </Description>

        <Carousel
          opts = {{ align: "start" }}
          className="flex justify-center items-center mt-8"
        >
          <CarouselContent>
            {projects.map((project, index) => {
              const isActive = isMobile || hoveredProject === index;

              return (
                <CarouselItem key={index} index={index} className="flex justify-center md:basis-1/1 lg:basis-1/2">
                  <ProjectsCard
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ cursor: "pointer"}}
                  >
                    <ProjectsImage
                      src={project.image}
                      alt={project.title}
                      style={{
                      filter: isActive && !isMobile ? "blur(3px) brightness(0.4)" : "none",
                      transform: isActive ? "scale(1.05)" : "scale(1)",}}
                    />

                    <Overlay style={{ opacity: !isMobile && isActive ? 1 : 0 }} />

                    <Content
                      initial={{ opacity: 0, y:20 }}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 20,
                      }}
                      transition={{ duration: 0.3 }}
                    
                    >
                      <ProjectsTitle className="text-customViolet">{project.title}</ProjectsTitle>

                      {isActive && (
                        <>
                          <ProjectsDescription>
                            {project.description}
                          </ProjectsDescription>
                        </>
                      )}

                    {project.stack && (
                      <StackRow>
                        <Stack>
                          {project.stack.map((tech, i) => (
                            <StackItem $active={isActive} key={i}>
                              {tech}
                            </StackItem>
                          ))}
                        </Stack>

                        <Actions
                            as={motion.div}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 10 }}
                            transition={{ duration: 0.25 }}
                          >
                          {project.github && (
                            <ActionButton
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github />
                            </ActionButton>
                          )}

                          {project.demo && (
                            <ActionButton
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ArrowUpRight />
                            </ActionButton>
                          )}
                        </Actions>
                      </StackRow>
                    )}
                    </Content>
                  </ProjectsCard>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Wrapper>
    </Container>
  );
};

export default Projects;
