import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence} from 'framer-motion';
import { contactFormAnim } from '../animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {

    const[message, setMessage] = useState('Wow I\'m Popular!');
    const[message1, setMessage1] = useState('Shoot me a message!')
    const[color, setColor] = useState({color: "white"});
    const[hideForm, setHideForm] = useState(true)

    const handleText = (e) => {
        setMessage(e.target.value);
        setMessage1(e.target.value)
    }

    const clear = (e) => {
        if(e.target.value.length > 0) {
            setMessage1('')
            setMessage('')
        }
    }

    const handleSubmit = () => {
        setTimeout(() => {
            setMessage('Message Sent!');
            setColor({color: 'lightgreen'});
            setMessage1('thank you!')
        }, 800);
    }

    const hideForm1 = () => {
        setTimeout(() => {
            setHideForm(!hideForm);
        }, 2500);
    }

    return (
        <AnimatePresence>
        {hideForm && (
            <Form 
                variants={contactFormAnim}
                exit='exit'
                initial="hidden" 
                animate="show"
            >   
                <FontAwesomeIcon icon={faComment} size='2x' color='white' />
                <h4 style={color}>{message}</h4>
                <label>
                    <textarea type="text" value={message1} onClick={clear} onChange={handleText} />
                    <input type="submit" value="Submit" onClick={() => {handleSubmit(); hideForm1()}} />
                </label>
            </Form>
        )}
        </AnimatePresence>
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
    //border: solid #7bc30f;
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
            justify-content: center;
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