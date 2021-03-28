import React, { useState } from 'react';
import styled from 'styled-components'
import dog from '../img/dog.png';
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './ContactForm';
import book from '../img/book4.jpg';

const MyInfo = ({ profileStatus }) => {

    const[showForm, setShowForm] = useState(false);
    
    const showForm1 = () => {
        setShowForm(!showForm);
    }

    return (
        <Profile className={`profile ${profileStatus ? "active-profile" : ""}`}>
            <IMG src={book} alt=""/>
            <h1>Pup Ruffles</h1>
            <Image className='dog' src={dog} alt="dog"/>
            <p>Bone collecting is my new hobby.  Walks in the park are my favorite as well as beef treats.</p>
            <p>
                <span>Age</span>: 3
                <br />
                <br />
                <span>Breed</span>: Golden Retriever
                <br />
                <br />
                <a href="mailto:ruffruff@barks.com"><span><FontAwesomeIcon icon={faEnvelope} /></span> ruffruff@barks.com</a>
                <br /> 
                <br />
                <span><FontAwesomeIcon icon={faPhone} /></span> (162)297-2572
            </p>
                <button type="button" onClick={showForm1}>Send a message?</button>
            <AnimatePresence>
                {motion.showForm && (
                    <ContactForm showForm={showForm} setShowForm={setShowForm} />
                )}
            </AnimatePresence>
        </Profile>
    );
}

const IMG = styled.img`
    position: fixed;
    width: 100%;
    height: 30%;
    z-index: -2;
    object-fit: cover;
    opacity: 0.3;
`;

const Profile = styled.div`
    background: white;
    position: fixed;
    //top: 7rem;
    top: 0;
    left: 0;
    //height: 70%;
    height: 100%;
    width: 20rem;
    border-radius: 10px;
    box-shadow: 2px 2px 50px rgb(182, 180, 180);
    overflow: hidden;
    z-index: 10;
    transform: translateX(-100%);
    transition: all 0.5s ease;
    opacity: 0;
    a {
        text-decoration: none;
        color: #ada1a1;
    }
    h1 {
        margin-top: 2.2rem;
        padding: 0rem 4rem;
        //color: #ada1a1;
        color: rgb(233, 207, 90);
    }
    p {
        padding: 0rem 4rem;
        color: #ada1a1;
    }
    span {
        color: rgb(233, 207, 90);
        font-weight: bold;
    }
    button {
        cursor: pointer;
        font-size: 20px;
        outline: none;
        margin-left: 7rem;
        margin-top: 1.5rem;
        border: none;
        padding: 0.2rem;
        color: orange;
        background: none;
        &:hover {
            transform: scale(1.3);
            transition: 0.5s ease;
        }
        &:not(hover) {
            transition: 0.5s ease;
        }
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
        body {
            overflow: none;
        }
        h1 {
            text-align: center;
            padding: 0;
        }
        span, p {
            font-size: 17px;
        }
        p {
            padding: 0rem 2rem;
        }
        button {
            margin-left: 5rem;
            margin-bottom: 0;
            padding: 0;
        }
        .dog {
            margin-left: 3rem;
            padding: 0rem 0rem 0rem 0rem
        }
    }

    &::-webkit-scrollbar {
        width: 0.4rem;
        height: 100%;
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgba(179, 179, 179, 0.5);
        border-radius: 25px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    &.active-profile {
        transform: translateX(0%);
        opacity: 1;
        overflow: hidden;
    }
`;

const Image = styled.img`
    width: 10rem;
    height: 10rem;;
    object-fit: cover;
    border-radius: 50%;
    padding: 0rem 4rem;
`;

export default MyInfo;