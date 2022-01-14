import React from 'react';
import { Route, Routes } from "react-router-dom";
import styled from '@emotion/styled';
import Menu from './menu';
import { Container } from '@mui/material';
import Home from './pages/home';
import Story from './pages/story';
import WeddingParty from './pages/wedding_party';
import Details from './pages/details';
import Travel from './pages/travel';
import Registry from './pages/registry';
import QNA from './pages/qna';

const MainContainer = styled(Container)({
  paddingTop: '80px'
});

const App = () => {
  let content = (
    <div>
      <Menu/>
      <MainContainer>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/story" element={<Story/>}/>
          <Route path="/details" element={<Details/>}/>
          <Route path="/weddingparty" element={<WeddingParty/>}/>
          <Route path="/travel" element={<Travel/>}/>
          <Route path="/registry" element={<Registry/>}/>
          <Route path="/qna" element={<QNA/>}/>
        </Routes>
      </MainContainer>
    </div>
  );

  return content;
};

export default App;
