'use client';
import { useState, useEffect } from 'react';
import styles from './style.module.scss';
import Titles from './titles';
import Descriptions from './descriptions';
import Reveal from '../../../utils/Reveal';
import styled from 'styled-components';
import { data, newData} from '../../../data/constants';

const Container = styled.div`
    width: 100%;
    margin-bottom: 200px;
`;
const Title = styled.div`
  padding: 200px;
  margin-left: 100px;
  font-size: 110px;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  font-family: 'Monument Extended', sans-serif;
  font-weight: 400;
  z-index: 1; 

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Title2 = styled.div`
  padding-left: 150px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 10px;
`;


const Title3 = styled.div`
  padding: 10px 150px 0;
  
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 10px;
`;



export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedNewProject, setSelectedNewProject] = useState(null);


    const str = "SAMPLE TEXT";

    useEffect(() => {
        const text = document.getElementById("text");
        for (let i = 0; i < str.length; i++) {
        let span = document.createElement("span");
        span.innerHTML = str[i];
        span.className = styles.span; // Apply the span class from the CSS module
        text.appendChild(span);
        span.style.transform = `rotate(${11 * i}deg)`;
        }
    }, [str]);


    return (
    <Container>
         <div className={styles.container}>
      <div id="text" className={styles.text}></div>
    </div>
        <Reveal>
        <Title>experience_<br />& education</Title>
        </Reveal>
        <Title2>work exp :</Title2>
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Titles data={data} setSelectedProject={setSelectedProject} />
                <Descriptions data={data} selectedProject={selectedProject} />
            </div>
            <Title3>education :</Title3> 
            <div className={styles.container}>
                <Titles data={newData} setSelectedProject={setSelectedNewProject} />
                <Descriptions data={newData} selectedProject={selectedNewProject} />
            </div>
        </div>

        </Container>
    );
}
