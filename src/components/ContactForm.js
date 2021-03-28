import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { contactFormAnim } from '../animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const ContactForm = ({showForm, setShowForm}) => {

    const[message, setMessage] = useState('Wow I\'m Popular!');
    const[message1, setMessage1] = useState('')
    const[submitMessage, setSubmitMessage] = useState('Cancel');
    const[color, setColor] = useState({color: "white"});
    const[icon, setIcon] = useState(<FontAwesomeIcon className='icon' icon={faComment} size='3x' color='white' />);

    const handleText = (e) => {
        e.preventDefault();
        //setMessage(e.target.value);
        if (e.target.value.length > 0) {
            setSubmitMessage('Send');
        } else {
            setSubmitMessage('Cancel');
        }
        setMessage1(e.target.value);
    }

    const handleSubmit = () => {
        if (submitMessage === 'Send') {
            setTimeout(() => {
                setMessage('Message Sent!');
                setColor({color: 'lightgreen', fontSize: '35px'});
                setMessage1('thank you!');
                setSubmitMessage('Sent')
                setIcon(<FontAwesomeIcon className='icon' icon={faCheckCircle} size='3x' color='white' />)
            }, 800)
            setTimeout(() => {
                setMessage('Wow I\'m Popular!')
                setColor({color: 'white', fontSize: '25px'})
                setMessage1('')
                setSubmitMessage('Cancel')
                setIcon(<FontAwesomeIcon className='icon' icon={faComment} size='3x' color='white' />)
            }, 3000)
        }
    }

    const hideForm1 = () => {
        if (submitMessage === 'Send') {
            setTimeout(() => {
                setShowForm(!showForm);
            }, 2500);
        } else {
            setShowForm(!showForm);
        }
    }

    return (
        <AnimatePresence>
        {showForm && (
            <Form 
                variants={contactFormAnim}
                exit='exit'
                initial="hidden" 
                animate="show"
            >   
                <div>{icon}</div>
                <h4 style={color}>{message}</h4>
                <label>
                    <input type="name" placeholder='Your Name' />
                </label>
                <label>
                    <textarea type="text" value={message1} placeholder='Your Message' onChange={handleText} />
                    <input type="submit" value={submitMessage} onClick={() => {handleSubmit(); hideForm1()}} />
                </label>
            </Form>
        )}
        </AnimatePresence>
    );
}

const Form = styled(motion.div)`
    display: flex;
    height: 52vh;
    font-size: 25px;
    //border: solid white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 50px rgb(182, 180, 180);
    border-radius: 50px;
    padding: 0.5rem;
    margin: 1rem;
    background: #47b1a6;
    label {
        margin: 0.2rem;
        display: flex;
        flex-direction: column;
        input{
            text-align: center;
            justify-content: center;
            cursor: pointer;
            border: none;
            height: 1rem;
            width: 12rem;
            margin-top: 1rem;
            outline: none;
            background: white;
            color: orange;
            border-radius: 10px;
            word-wrap: break-word;
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
            margin-bottom: 1rem;
            text-align: center;
            justify-content: center;
            border: none;
            height: 3rem;
            outline: none;
            border-radius: 10px;
            resize: none;
        }
    }
    h4 {
        width: 90%;
        color: whitesmoke;
        overflow: hidden;
        margin: 2rem;
        text-align: center;
        word-wrap: break-word;
    }
    span {
        font-size: 20px;
    }
    .icon {
        padding: 0;
        margin: 0;
    }

    @media screen and (max-width: 768px) {
        width: 80%;
        font-size: 18px;
        height: 50vh;
        margin-top: 1.5rem;
        margin-left: 1.1rem;
        height: 58vh;
        label {
            input {
                width: 9rem;
                &:hover {
                background: #7fdf7f;
                color: white;
                transform: scale(1.01);
                transition: 0.3s ease-in;
                }
            }
        }
    }
`;

export default ContactForm;