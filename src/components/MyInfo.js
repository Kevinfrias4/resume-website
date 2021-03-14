import React from 'react';
import styled from 'styled-components'
import dog from '../img/dog.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const MyInfo = ({ profileStatus }) => {
    return (
        <Profile className={`profile ${profileStatus ? "active-profile" : ""}`}>
            <h1>Kevin Frias</h1>
            <Image src={dog} alt="dog"/>
            <p>Bone collecting is my new hobby.  Walks in the park are my favorite as well as beef treats.</p>
            <p>
                <span>Age</span>: 3
                <br />
                <br />
                <span>Breed</span>: Golden Retriever
                <br />
                <br />
                <span><FontAwesomeIcon icon={faEnvelope} /></span> ruffruff@barks.com
                <br /> 
                <br />
                <span><FontAwesomeIcon icon={faPhone} /></span> (162)297-2572
            </p>
        </Profile>
    );
}

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
    overflow: scroll;
    z-index: 10;
    transform: translateX(-100%);
    transition: all 0.5s ease;
    opacity: 0;
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