import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ setProfileStatus, profileStatus }) => {
    return (
        <StyleNav>
            <h1>Resume</h1>
            <button onClick={() => setProfileStatus(!profileStatus)}>
                <FontAwesomeIcon icon={faSmile} size='3x' />
            </button>
        </StyleNav>
    );
}

const StyleNav = styled.div`
    min-height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    h1 {
        font-size: 2.2rem;
    }
    button {
        background: transparent;
        border: none;
        cursor: pointer;
        //border: 2px solid rgb(65, 65, 65);
        //border: 2px solid rgb(37, 166, 195);
        border-radius: 50px;
        padding: .75rem;
        transition: all 0.3s ease;
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
`;

export default Nav;