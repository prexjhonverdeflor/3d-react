'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Titles from './titles';
import Descriptions from './descriptions';
import Reveal from '../../../utils/Reveal';
import styled from 'styled-components';
import { data, newData } from '../../../data/constants';
import Img from '../../../images/error.gif';
import Img2 from '../../../images/circle.gif';
import Img3 from '../../../images/face.png';

const Container = styled.div`
    width: 100%;
    margin-bottom: 200px;
    justify-content: center;
    align-items: center;


`;

const Title = styled.div`
  font-size: 120px;
  text-align: center;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  font-family: 'Monument Extended', sans-serif;
  font-weight: 400;
  z-index: 1;
  padding: 300px;


  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 50px;
    margin-top:50px;
    margin-bottom:50px;

  }
`;

const Wrapper = styled.div`

`;

const Title2 = styled.div`
    padding: 10px 150px 0;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 10px;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const Title3 = styled.div`
  padding: 10px 150px 0;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 10px;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const Image = styled.img`
  width: 700px;
  opacity: 20%;
  position: absolute;
  margin-left: 850px;
  margin-top: -90px;

  @media (max-width: 768px) {
    width: 70%;
    margin-left: 200px;
    margin-top: -10px;
  }
`;

const Image2 = styled.img`
  height: 400px;
  weight: 400px;
  opacity: 10%;
  position: absolute;
  margin-left: 1250px;
  margin-top: -250px;

  @media (max-width: 768px) {
    width: 50%;
  }
`;

const Image3 = styled.img`
  width: 500px;
  opacity: 15%;
  position: absolute;
  margin-left: -50px;
  margin-top: 250px;

  @media (max-width: 768px) {
    width: 50%;
    margin-left: -50px;
    margin-top: 120px;
  }
`;

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedNewProject, setSelectedNewProject] = useState(null);

    return (
        <Container>
            <Image src={Img} />
            <Image3 src={Img3} />
            <Reveal>
                <Title id='Experience'>experience_<br />& education</Title>
            </Reveal>
            <Wrapper>
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
            </Wrapper>
            <Image2 src={Img2} />
        </Container>
    );
}
