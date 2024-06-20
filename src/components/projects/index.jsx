'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Titles from './titles';
import Descriptions from './descriptions';
import Reveal from '../../utils/Reveal';
import styled from 'styled-components';


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

const data = [
    {
        title: "CAMALIG BANK",
        description: "Working on the Next-Generation HMI Experience without no driving experience.",
        speed: 0.5
    },
    {
        title: "DENR 5",
        description: "Developed the Future of UFC Sports Ecosystem despite not being a sports fan.",
        speed: 0.5
    },
];

const newData = [
    {
        title: "STI COLLEGE",
        description: "Description for Project A.",
        speed: 1.0
    },
    {
        title: "STI SENIOR HIGH",
        description: "Description for Project B.",
        speed: 1.5
    },
    {
        title: "BICOL COLLEGE",
        description: "Description for Project B.",
        speed: 1.5
    }
    
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedNewProject, setSelectedNewProject] = useState(null);

    return (
    <Container>
        <Reveal>
        <Title>experience_<br />& education</Title>
        </Reveal>
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Titles data={data} setSelectedProject={setSelectedProject} />
                <Descriptions data={data} selectedProject={selectedProject} />
            </div>
            <div className={styles.container}>
                <Titles data={newData} setSelectedProject={setSelectedNewProject} />
                <Descriptions data={newData} selectedProject={selectedNewProject} />
            </div>
        </div>

        </Container>
    );
}
