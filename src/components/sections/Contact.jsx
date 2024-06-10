import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import CarCanvas from "../canvas/Car";
import { Reveal } from "../../utils/Reveal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 15px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  gap: 12px;
  width: 100%;
  max-width: 400px;
`;

const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 14px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 14px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.bg};
  background: ${({ theme }) => theme.text_primary};
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.text_secondary};
    color: ${({ theme }) => theme.bg};
    transition: 0.5s;
  }
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  margin: 0;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  color: ${({ theme }) => theme.primary};
  justify-content: end;
  margin-left: -100px;
  font-size: 30px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px; /* Adjust the gap between text and form */
  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    margin-left:0;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 640px) {
    height: 400px;
  }
`;

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_w2btw3c",
        "template_bmxddch",
        form.current,
        "r10gd19b0vwVLR_b5"
      )
      .then(
        (result) => {
          alert("Message Sent");
          form.current.reset();
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <Container id="Education">
      <Wrapper>
        <Reveal>
          <Title style={{ marginTop: "100px" }}>Contact</Title>
        </Reveal>
        <Reveal>
          <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        </Reveal>
        <HeroInnerContainer>
            
          <HeroLeftContainer>
            <ContactForm ref={form} onSubmit={handleSubmit}>
            <div style={{ flex: 1, textAlign: "left" }}>
              <ContactTitle>Email Me</ContactTitle>
            </div>
              <ContactInput placeholder="Your Email" name="from_email" />
              <ContactInput placeholder="Your Name" name="from_name" />
              <ContactInputMessage placeholder="Message" name="message" rows={4} />
              <ContactButton type="submit" value="Send" />
            </ContactForm>
          </HeroLeftContainer>
          <HeroRightContainer>
            <CarCanvas autoRotate autoRotateSpeed={2} enableZoom={false} />
          </HeroRightContainer>
        </HeroInnerContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
