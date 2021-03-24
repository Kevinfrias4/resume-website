import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { contactFormAnim } from '../animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {

    const[message, setMessage] = useState('Wow I\'m Popular!');
    const[color, setColor] = useState({color: "white"})
    const[hideForm, setHideForm] = useState(true);

    const handleSubmit = (e) => {
        setMessage(e.target.value);
    }

    const resetForm = (e) => { 
        setMessage('')
    }

    return (
        <>
        {hideForm && (
            <Form 
                variants={contactFormAnim}
                exit="exit" 
                initial="hidden" 
                animate="show"
                onSubmit={resetForm}
            >   
                <FontAwesomeIcon icon={faComment} size='2x' color='white' />
                <h4 style={color}>{message}</h4>
                <label>
                    <textarea type="text" placeholder={'Shoot me a message!'} onChange={handleSubmit} />
                    <input type="submit" value="Submit" onClick={() => {setMessage('Message Sent!'); setColor({color: 'lightgreen'})}} />
                </label>
            </Form>
        )}
        </>
    );
}

const Form = styled(motion.div)`
    display: flex;
    height: 45vh;
    font-size: 25px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 50px rgb(182, 180, 180);
    //border: solid #9cdb3d;
    border-radius: 50px;
    padding: 0.5rem;
    margin: 1rem;
    background: #47b1a6;
    label {
        display: flex;
        flex-direction: column;
        input {
            cursor: pointer;
            border: none;
            height: 1rem;
            width: 12rem;
            margin-top: 1rem;
            outline: none;
            background: white;
            color: orange;
            border-radius: 10px;
            &:hover {
                background: #7fdf7f;
                color: white;
                transform: scale(1.3);
                transition: 0.3s ease-in;
            }
            &:not(hover) {
                //transform: scale(1);
                transition: 0.7s ease-out;
            }
        }
        textarea {
            text-align: center;
            border: none;
            height: 3rem;
            outline: none;
            border-radius: 10px;
        }
    }
    h4 {
        color: whitesmoke;
        margin-bottom: 2rem;
        overflow: hidden;
        margin: 1.5rem;
        text-align: center;
    }
    span {
        font-size: 20px;
    }
`;

export default ContactForm;