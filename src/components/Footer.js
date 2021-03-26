import React from 'react';
import styled from 'styled-components';
import { footerAnim } from '../animations';
import { motion } from 'framer-motion';
import { useScroll } from './useScroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faLink, faAddressBook, faAirFreshener } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

    const [element, controls] = useScroll();

    return (
        <FooterContainer ref={element} variants={footerAnim} animate={controls} initial="hidden">
            <FontAwesomeIcon icon={faBriefcase} size='3x' color="lightGreen" />
            <FontAwesomeIcon icon={faLink} size='3x' color="lightGreen" />
            <FontAwesomeIcon icon={faAddressBook} size='3x' color="lightGreen" />
            <FontAwesomeIcon icon={faAirFreshener} size='3x' color="lightGreen" />
        </FooterContainer>
    );
}

const FooterContainer = styled(motion.div)`
    display: flex;
    justify-content: space-around;
    //border-top: solid black;
    //box-shadow: 2px 2px 50px rgb(199, 199, 199);
    padding: 0.2rem;
    margin-top: 3rem;
    left: 0;
    //border-radius: 50px 50px 0px 0px;
    .Icon {
        display: flex;
        justify-content: space-between
    }
`;

export default Footer;