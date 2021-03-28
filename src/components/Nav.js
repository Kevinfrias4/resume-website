import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { navAnim } from '../animations';

const Nav = ({ setProfileStatus, profileStatus }) => {

    const { pathname } = useLocation();

    return (
        <StyleNav 
            variants={navAnim}
            initial='hidden'
            animate='show'
        >
            <h1>
                <Link to="/">
                    <motion.h1
                        whileTap={{ color: 'orange' }}
                        transition={{duration: 0.75}} 
                        initial={{ color: "" }}
                        animate={{ color: pathname === '/' ? "lightseagreen" : "", opacity: pathname === '/' ? 1 : 0.5 }}
                    > 
                    Résumé 
                    </motion.h1> 
                </Link>
            </h1>
            <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 2.5 }}
                onClick={() => setProfileStatus(!profileStatus)}>
                <FontAwesomeIcon icon={faSmile} size='3x' />
            </motion.button>
            <h1>
                <Link to="/education">
                    <motion.h1 
                        whileTap={{ color: 'orange'}}
                        transition={{duration: 0.75}} 
                        initial={{ color: ""}}
                        animate={{ color: pathname === '/education' ? "lightseagreen" : "", opacity: pathname === '/education' ? 1 : 0.5}}
                    >
                        Education
                    </motion.h1>
                </Link>
            </h1>
        </StyleNav>
    );
}

const StyleNav = styled(motion.div)`
    top: 0;
    //position: sticky;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 10;
    a {
        text-decoration: none;
        opacity: 0.5;
        color: #bdbdbd;
        &:hover {
            color: orange;
        }
    }
    h1 {
        font-size: 2.2rem;
        //opacity: 0.7;
        padding: 0;
        margin: 0.8rem;
        letter-spacing: 10px;
    }
    button {
        background: transparent;
        border: none;
        cursor: pointer;
        margin-left: 3rem;
        //border: 2px solid rgb(65, 65, 65);
        //border: 2px solid rgb(37, 166, 195);
        border-radius: 50px;
        padding: .75rem;
        transition: all 0.5s ease;
        :focus {
            outline: 0;
        }
        &:hover {
            //background: rgb(65, 65, 65);
            background:rgb(233, 207, 90);
            color: white;
            box-shadow: 0 0 10px rgb(255, 251, 31), 
            0 0 10px rgb(237, 251, 39);
        }
    }
    @media screen and (max-width: 768px) {
        margin-top: 1rem;
        h1 {
            font-size: 1rem;
            margin: 0;
            letter-spacing: 2px;
        }
        button {
            font-size: 10px;
            z-index: 12;
            padding: 0;
            margin-left: 2rem;
            margin-right: 1rem;
        }
    }
`;

export default Nav;