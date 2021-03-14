import React from 'react'
import styled from 'styled-components';
import { cardSlide } from '../animations';
import { motion } from 'framer-motion';
import { useScroll } from './useScroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {

    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    const [element3, controls3] = useScroll();

    return(
        <ExperienceContainer>
            <h1>Experience</h1>
            <Card ref={element} variants={cardSlide} animate={controls} initial="hidden">
                <FontAwesomeIcon icon={faBriefcase} size="2x" color="orange" />
                <h2>Ultimate Worldwide Logistics (Regional Driver)</h2>
                <h5>August 2020 - October 2020</h5>
                <br />
                <CardBody>
                    <ul>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nostrum veniam libero enim dolorem magni perferendis reiciendis architecto sint qui eaque, consequuntur blanditiis vel quis, fugiat vitae non cupiditate aut?</li>
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, asperiores!</li>
                    </ul>
                </CardBody>
            </Card>
            <Card ref={element2} variants={cardSlide} animate={controls2} initial="hidden">
                <FontAwesomeIcon icon={faBriefcase} size="2x" color="orange" />
                <h2>Schneider National (Regional Driver)</h2>
                <h5>September 2018 - February 2020</h5>
                <br/>
                <CardBody>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nostrum veniam libero enim dolorem magni perferendis reiciendis architecto sint qui eaque, consequuntur blanditiis vel quis, fugiat vitae non cupiditate aut?</p>
                </CardBody>
            </Card>
            <Card ref={element3} variants={cardSlide} animate={controls3} initial="hidden">
                <FontAwesomeIcon icon={faBriefcase} size="2x" color="orange" />
                <h2>Target (Backroom Logistics Team Member)</h2>
                <p> March 2016 - May 2018</p>
                <br />
                <CardBody>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nostrum veniam libero enim dolorem magni perferendis reiciendis architecto sint qui eaque, consequuntur blanditiis vel quis, fugiat vitae non cupiditate aut?</p>
                </CardBody>
            </Card>
        </ExperienceContainer>
    );
}

const ExperienceContainer = styled.div`
    margin-top: 3rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 1.2rem;
        color: #5e5e5e;
        opacity: 0.75;
        margin-bottom: 0;
    }
`;

const Card = styled(motion.div)`
    margin: 2rem 0.7rem;
    //background: #fdffef;
    padding: 1rem;
    height: 70vh;
    width: 75%;
    box-shadow: 2px 2px 50px rgb(199, 199, 199);
    border-radius: 25px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        opacity: 0.80;
        background: -webkit-linear-gradient(right, orange, darkCyan);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 400;
    }
    h5 {
        margin-top: 0rem;
    }
    span {
        font-size: 1.5rem;
    }
`;

const CardBody = styled.div`
    //border: solid lightblue;
    height: 35vh;    
    background: #a8d1d1;
    box-shadow: 2px 2px 50px rgb(199, 199, 199);
    padding: 1rem;
    margin: 1rem;
    p {
        line-height: 50px;
    }
`;

export default Experience;