import React, { useState } from 'react';
import styled from 'styled-components';
//Components
import Nav from './components/Nav'
import MyInfo from './components/MyInfo';

function App() {
  const[profileStatus, setProfileStatus] = useState(false);

  return (
    <Main className={`App ${profileStatus ? "profile-active" : ""}`}>
      <Nav profileStatus={profileStatus} setProfileStatus={setProfileStatus} />
      <MyInfo profileStatus={profileStatus}/>
    </Main>
  );
}

const Main = styled.div`
&.library-active {
  margin-left: 20%;
}
`

export default App;
