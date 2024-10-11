import styled from "styled-components";
import { Bio } from '../../data/constants';
import { icons } from '../../data/constants';
import { Form } from "@/components/ui/form"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
    padding-bottom: 100px;
    padding-top: 100px;

    @media (max-width: 1024px){
      padding-top: 80px;
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

const Card = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  justify-content: center;

  @media (max-width: 768px) {
     display: flex;
     flex-direction: column;
     align-items: center;
     width: 80%;
  }
`;

const CardLeft = styled.div`
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  max-width: 500px;
  background-color: transparent;
  border: 1px solid #854ce6;
  border-radius: 2.5rem 0px 0px  2.5rem;
  padding: 5rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 900px) {
    padding: 5rem 1.75rem;
  };

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
    border-radius: 2.5rem 2.5rem  0px  0px;
    gap: 1px;
  };

`

const CardRight = styled.div`
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  max-width: 500px;
  background-color: ${({ theme }) => theme.card } ;
  border: 1px solid #854ce6;
  border-radius: 0px 2.5rem 2.5rem 0px;
  padding: 18px 36px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    border-radius: 0px 0px  2.5rem 2.5rem;
  }

`

const Details = styled.div`
 display: flex;
 flex-direction: column;
 width: 100%;
 gap: 25px;
 padding: 2.5rem 0px;

@media screen and (max-width: 425px) {
  padding: 1.75rem 0px;
}
`;

const DetailsInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  font-size: 18px;

@media (min-width: 769px) and (max-width: 900px) {
  font-size: 16px;
}

@media screen and (max-width: 425px) {
  font-size: 16px;
}

`

const DetailsIcon = styled.a`
    display: flex;
    align-items: center;
    margin-right: 8px;
    color: ${({ theme }) => theme.primary};
`;

const IconDisplay = styled.div`
  display: flex;
  flex-direction: row;
`;


const Label = styled.div`
  position: absolute;
  top: -.8ex;
  left: 18px;
  background-color: rgb(23, 23, 33);
  z-index: 1;
  padding: 0px 10px;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.primary};
  border-radius: 2.5rem;
  margin: 10px;
  margin-left: 20px;
  padding: 0.5rem 1rem;
`;

const H1 = styled.h1`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 500;	

  @media screen and (max-width: 900px) {
    font-size: 1.3rem;
    gap: 10px;
  }
`;


const Contact = () => {
  return (
      <Container id = "contact">
          <Wrapper>
              <Title>
                  Contact
              </Title>
              <Description>Feel free to reach out to me for any questions or opportunities!</Description>
          </Wrapper>
          
          <Card>
            <CardLeft>
              <H1 className = "text-2xl font-medium">Get in touch with me</H1>
              <Details>
                <DetailsInfo><DetailsIcon>{icons.mail}</DetailsIcon> {Bio.email}</DetailsInfo>
                <DetailsInfo><DetailsIcon>{icons.location}</DetailsIcon> {Bio.location}</DetailsInfo>
                <DetailsInfo><DetailsIcon>{icons.cellphone} </DetailsIcon> {Bio.number}</DetailsInfo>
              </Details>
              <p>Connect with me :</p>
              <IconDisplay>
                <DetailsIcon href={Bio.facebook} target="_blank" rel="noopener noreferrer">{icons.facebook}</DetailsIcon>
                <DetailsIcon href={Bio.github} target="_blank" rel="noopener noreferrer">{icons.github}</DetailsIcon>
                <DetailsIcon href={Bio.linkedin} target="_blank" rel="noopener noreferrer">{icons.linkedin}</DetailsIcon>
              </IconDisplay>
            </CardLeft>


            <CardRight>
              <h1 className = "text-2xl mt-5 ml-5 font-bold">Contact Me</h1>


            <Form>
              <fieldset className = "relative mt-7">
              <input
                type="text"
                id="username"
                className="rounded-xl border-solid border-white border h-11 w-full bg-transparent text-white px-2 mt-2"
              />                
              <Label>Username</Label>
              </fieldset>

              <fieldset className = "relative mt-3">
              <input
                type="text"
                id="username"
                className="rounded-xl border-solid border-white border h-11 w-full bg-transparent text-white px-2 mt-2"
              />                
              <Label>Email</Label>
              </fieldset>

              <fieldset className = "relative mt-3">
              <input
                type="text"
                id="username"
                className="rounded-xl border-solid border-white border h-11 w-full bg-transparent text-white px-2 mt-2"
              />                
              <Label>Phone</Label>
              </fieldset>

              <fieldset className = "relative mt-3">
              <textarea
                type="text"
                id="username"
                className="rounded-xl border-solid border-white border min-h-40 max-h-48 w-full bg-transparent text-white px-2 mt-2 leading-9"
              />                
              <Label>Message</Label>
              </fieldset>

              <Button type="submit">Send</Button>

            </Form>

            </CardRight>
          
          </Card>

          </Container>
  )
}




export default Contact;