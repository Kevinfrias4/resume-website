import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { titleAnim, titleAnim2, titleAnim3, titleAnim4, titleAnim5 } from '../animations';
import Wave from './Wave';

const MainPage = () => {
    return (
        <Container>
            <Hide>
                <motion.h1 variants={titleAnim} initial="hidden" animate="show">H</motion.h1>
            </Hide>
            <Hide>
                <motion.h1 variants={titleAnim2} initial="hidden" animate="show">E</motion.h1>
            </Hide>
            <Hide>
                <motion.h1 variants={titleAnim3} initial="hidden" animate="show">L</motion.h1>
            </Hide>
            <Hide>
                <motion.h1 variants={titleAnim4} initial="hidden" animate="show">L</motion.h1>
            </Hide>
            <Hide>
                <motion.h1 variants={titleAnim5} initial="hidden" animate="show">O</motion.h1>
            </Hide>
            <Wave />
        </Container>
    );
}

const Container = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    h1 {
        margin-top: 5rem;
        font-size: 12rem;
        font-weight: 700;
        //color: #4dc0a3;
        color: rgb(233, 207, 90);
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

export default MainPage;