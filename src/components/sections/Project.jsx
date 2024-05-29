import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';



const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  margin-top: 50px;
  padding: 0 16px;
  position: rlative;
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
  color: ${({ theme }) => theme.primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TogggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;
  @media (max-width: 768px) {
    font-size: 12px;
  }

`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
  ${({ active, theme}) =>
    active &&` 
  background: ${theme.primary + 20};
  `}
`;


const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`;



const Project = () => {
    const [toggle, setToggle] = useState("all");
  return (
    <Container id="Projects">
        <Wrapper>
            <Title>Projects</Title>
            <Desc
          style={{
            marginBottom: "40px",
          }}
        >
        This is the projects i created so far
        </Desc>
        <TogggleButtonGroup>
            <ToggleButton active={toggle==="all"}
            onClick={() => setToggle("all")}>
                ALL
            </ToggleButton>
            <Divider/>
            <ToggleButton active={toggle==="web app"}
            onClick={() => setToggle("web app")}>
                WEBAPP
            </ToggleButton>
        </TogggleButtonGroup>
        </Wrapper>
    </Container>
  )
}

export default Project