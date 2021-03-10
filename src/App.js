import React, { useState } from 'react';
import styled from 'styled-components';
//Components
import Nav from './components/Nav'
import MyInfo from './components/MyInfo';
import MainPage from './components/MainPage';
import Strengths from './components/Strengths';
import Skills from './components/Skills'

function App() {
  const[profileStatus, setProfileStatus] = useState(false);

  return (
    <Main className={`App ${profileStatus ? "profile-active" : ""}`}>
      <Nav profileStatus={profileStatus} setProfileStatus={setProfileStatus} />
      <MyInfo profileStatus={profileStatus}/>
      <MainPage />
      <Strengths />
      <Skills />
    </Main>
  );
}

const Main = styled.div`
  &.profile-active {
    margin-left: 30%;
    transition: ease-in;
  }
  &.App {
    transition: all 0.5s ease;
    * {
      font-family: "Lato", sans-serif;
    }
  }
`;

export default App;
