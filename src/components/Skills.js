import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { cardSlide, titleAnim6 } from '../animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Wave2 from './Wave2';

const Skills = () => {
    return (
        <>
            <SkillsContainer 
                exit="exit" 
                variants={cardSlide} 
                initial="hidden" 
                animate="show"
            >
                <Card>
                    <h3>HTML</h3>
                    <Rating>
                        <FontAwesomeIcon icon={faStar} color='gold' />
                        <FontAwesomeIcon icon={faStar} color='gold' />
                        <FontAwesomeIcon icon={faStar} color='gold' />
                        <FontAwesomeIcon icon={faStar} color='gold' />
                        <FontAwesomeIcon icon={faStar} color='gold' />
                    </Rating>
                </Card>
                <Card>
                    <h3>CSS</h3>
                    <Rating>
                        <FontAwesomeIcon icon={faStar} color='gold' />
                        <FontAwesomeIcon icon={faStar} color='gold' />
                        <FontAwesomeIcon icon={faStar} color='gold' />
                        <FontAwesomeIcon icon={faStar} color='gold' />
                        <FontAwesomeIcon icon={faStar} color='gold' />
                    </Rating>
                </Card>
                <Card>
                    <h3>JavaScript</h3>
                    <Rating>
                        <FontAwesomeIcon icon={faStar} color='gold' />
                        <FontAwesomeIcon icon={faStar} color='gold' />
                        <FontAwesomeIcon icon={faStar} color='gold' />
                        <FontAwesomeIcon icon={faStar} color='gold' />
                        <FontAwesomeIcon icon={faStar} color='gold' />
                    </Rating>
                </Card>
                <Card>
                    <h3>React</h3>
                    <Rating>
                        <FontAwesomeIcon icon={faStar} color='gold' />
                        <FontAwesomeIcon icon={faStar} color='gold' />
                        <FontAwesomeIcon icon={faStar} color='gold' />
                        <FontAwesomeIcon icon={faStar} color='gold' />
                        <FontAwesomeIcon icon={faStar} color='gold' />
                    </Rating>
                </Card>
                <Card>
                    <h3>Redux</h3>
                    <Rating>
                        <FontAwesomeIcon icon={faStar} color='gold' />
                        <FontAwesomeIcon icon={faStar} color='gold' />
                        <FontAwesomeIcon icon={faStar} color='gold' />
                        <FontAwesomeIcon icon={faStar} color='gold' />
                        <FontAwesomeIcon icon={faStar} color='grey' />
                    </Rating>
                </Card>
            </SkillsContainer>
            <Wave2 />
            <Education variants={titleAnim6} exit='exit' initial='hidden' animate='show' >
                <FontAwesomeIcon icon={faGraduationCap} size="2x" color="orange" />
                <h1>Education</h1>
                <EduCard>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, veritatis.</p>
                </EduCard>
            </Education>
        </>
    );
};

const SkillsContainer = styled(motion.div)`
    margin-top: 0rem;
    margin-right: 0rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    overflow-y: hidden
`;

const Card = styled.div`
    width: 100%;
    height: 20vh;
    margin: 1rem;
    padding: 0rem;
    border-radius: 30px;
    //box-shadow: 2px 2px 50px rgb(199, 199, 199);   
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: solid #b1c8b8;
    background: white;
    h3 {
        font-size: 25px;
        opacity: 0.80;
        background: -webkit-linear-gradient(right, orange, darkCyan);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 400;
        align-self: center;
    }
    &:hover {
        font-size: 35px;
        //background: rgb(65, 65, 65);        
        color: white;
        transform: scale(1.1);
        transition: 0.5s ease;
    }
    &:not(hover) {
        transition: 0.7s ease;
    }
`;

const Education = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 59vh;
    h1 {
        font-size: 1.5rem;
        opacity: 0.5;
        margin-top: 0;
    }
`;

const Rating = styled.div`
    display: flex;
    justify-content: center;
    opacity: 0.70;
`;

const EduCard = styled.div`
    border-radius: 25px;
    height: 70vh;
    width: 85%;
    box-shadow: 2px 2px 50px rgb(199, 199, 199);
    padding: 1rem;
`;

export default Skills;