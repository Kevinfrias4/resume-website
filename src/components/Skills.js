import React from 'react'
import styled from 'styled-components';
import { cardSlide } from '../animations';
import { motion } from 'framer-motion';
import { useScroll } from './useScroll';

const Skills = () => {

    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    const [element3, controls3] = useScroll();

    return(
        <ExperienceContainer>
            <h1>Experience</h1>
            <Card ref={element} variants={cardSlide} animate={controls} initial="hidden">
                <h2>Target (Backroom Logistics)</h2>
                <h5>2016-2019</h5>
                <br />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nostrum veniam libero enim dolorem magni perferendis reiciendis architecto sint qui eaque, consequuntur blanditiis vel quis, fugiat vitae non cupiditate aut?</p>
            </Card>
            <Card ref={element2} variants={cardSlide} animate={controls2} initial="hidden">
                <h2>Job Title</h2>
                <h5>Dates</h5>
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nostrum veniam libero enim dolorem magni perferendis reiciendis architecto sint qui eaque, consequuntur blanditiis vel quis, fugiat vitae non cupiditate aut?</p>
            </Card>
            <Card ref={element3} variants={cardSlide} animate={controls3} initial="hidden">
                <h2>Job Title</h2>
                <p>Dates</p>
                <br />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos nostrum veniam libero enim dolorem magni perferendis reiciendis architecto sint qui eaque, consequuntur blanditiis vel quis, fugiat vitae non cupiditate aut?</p>
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
    background: white;
    padding: 1rem;
    height: 100%;
    width: 75%;
    box-shadow: 2px 2px 50px rgb(199, 199, 199);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        opacity: 0.80;
        background: -webkit-linear-gradient(silver, darkCyan);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 400;
    }
    h5 {
        margin-top: 0;
    }
    span {
        font-size: 1.5rem;
    }
`;

export default Skills;