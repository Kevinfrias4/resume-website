import React from 'react';
import styled from 'styled-components';

const Strengths = () => {
    return (
            <StrengthContainer>
                <Title>Strengths</Title>
                <Card>
                    <h3>Quick Learner</h3>
                </Card>
                <Card>
                    <h3>Organized</h3>
                </Card>
                <Card>
                    <h3>Good Work Ethic</h3>
                </Card>
                <Card>
                    <h3>Self Motivated</h3>
                </Card>
            </StrengthContainer>
    );
}

const StrengthContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0;
    margin-top: 33vh;
    z-index: 9;
    justify-content: center;
`;

const Card = styled.div`
    margin: 0rem 0.7rem;
    background: white;
    padding: 1rem;
    height: 10vh;
    width: 20vh;
    box-shadow: 2px 2px 50px rgb(199, 199, 199);
    border-radius: 50px;
    overflow: hidden;
    h3 {
        opacity: 0.70;
        background: -webkit-linear-gradient(right, orange, darkCyan);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent
    }
    @media screen and (max-width: 768px) {
        padding: 0;
        font-size: 9px;
        text-align: center;
        height: 6vh;
        border-radius: 10px;
        margin: 7rem 0.2rem;
    }
`;

const Title = styled.h1`
    font-size: 1.2rem;
    display: flex;
    top: 113vh;
    padding: 0;
    position: absolute;
    justify-content: center;
    color: #5e5e5e;
    opacity: 0.75;
    @media screen and (max-width: 768px) {
        font-size: 0.5rem;
        top: 98vh;
    }
`;

export default Strengths;