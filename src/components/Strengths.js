import React from 'react';
import styled from 'styled-components';

const Strengths = () => {
    return (
        <div>
            <Title>STRENGTHS</Title>
            <StrengthContainer>
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
        </div>
    );
}

const StrengthContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 80vh;
    padding: 0;
    margin: 0;
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
    border-radius: 15px;
    overflow: hidden;
    h3 {
        opacity: 0.70;
        background: -webkit-linear-gradient(silver, darkCyan);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent
    }
`;

const Title = styled.h1`
    font-size: 1.5rem;
    display: flex;
    top: 112vh;
    width: 100%;
    padding: 0;
    position: absolute;
    justify-content: center;
    color: #5e5e5e;
    opacity: 0.75;
    //background: lightblue;
`;

export default Strengths;