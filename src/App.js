import React, { useState } from 'react';
import styled from 'styled-components';
//Components
import Nav from './components/Nav'
import MyInfo from './components/MyInfo';
import MainPage from './components/MainPage';
import Strengths from './components/Strengths';
import Experience from './components/Experience';
import Skills from './components/Skills';
import { Switch, Route, useLocation } from 'react-router-dom'

function App() {
  const[profileStatus, setProfileStatus] = useState(false);
  const location = useLocation();

  return (
    <Main className={`App ${profileStatus ? "profile-active" : ""}`}>
      <Nav profileStatus={profileStatus} setProfileStatus={setProfileStatus} />
      <MyInfo profileStatus={profileStatus}/>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          <MainPage />
          <Strengths />
          <Experience />
        </Route>
        <Route>
          <Skills exact path="/skills" />
        </Route>
      </Switch>
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
