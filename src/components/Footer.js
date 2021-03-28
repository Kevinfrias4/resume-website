import React from 'react';
import styled from 'styled-components';
import { footerAnim } from '../animations';
import { motion } from 'framer-motion';
import { useScroll } from './useScroll';
import insta from '../img/insta.svg';
import linkedin from '../img/linkedin.png';
import react from '../img/react.png';
import sound from '../img/soung.png';

const Footer = () => {

    const [element, controls] = useScroll();

    return (
        <FooterContainer ref={element} variants={footerAnim} animate={controls} initial="hidden">
            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/kevin-frias-284b75200/'><img src={linkedin} alt='linkedin' /></a>
            <a target="_blank" rel="noopener noreferrer" href='https://kevinfrias4.github.io/music-player/'><img src={react} alt='linkedin' /></a>
            <a target="_blank" rel="noopener noreferrer" href='https://soundcloud.com/kevin-kix-frias/sets/bulls-in-america'><img src={sound} alt='soundcloud' /></a>
            <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/kevinkixrocks'><img src={insta} alt='insta' /></a>
        </FooterContainer>
    );
}

const FooterContainer = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    //border-top: solid lightsteelblue;
    //box-shadow: 2px 2px 50px rgb(199, 199, 199);
    padding: 5rem;
    padding-bottom: 1rem;
    margin-top: 3rem;
    //border-radius: 50px 50px 0px 0px;
    img {
        cursor: pointer;
        width: 10vh;
        height: 10vh;
        object-fit: cover;
        &:hover {
            transform: scale(1.4);
            transition: 0.5s ease-out;
        }
        &:not(hover) {
            transform: scale(1);
            transition: 0.5s ease-out;
        }
    }
    @media screen and (max-width: 768px) {
        padding-left: 0;
        padding-right: 0;
        padding-top: 1rem;
        img {
            font-size: 50px;
        }
    }
`;

export default Footer;