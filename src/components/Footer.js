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
    justify-content: space-between;
    //border-top: solid lightsteelblue;
    //box-shadow: 2px 2px 50px rgb(199, 199, 199);
    padding: 5rem;
    padding-bottom: 1rem;
    margin-top: 3rem;
    //border-radius: 50px 50px 0px 0px;
    .icon {
        //display: flex;
        //justify-content: space-between
    }
`;

export default Footer;