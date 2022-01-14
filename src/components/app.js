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
          <Route path="/" component={<Home/>} exact/>
          <Route path="/story" component={<Story/>}/>
          <Route path="/details" component={<Details/>}/>
          <Route path="/weddingparty" component={<WeddingParty/>}/>
          <Route path="/travel" component={<Travel/>}/>
          <Route path="/registry" component={<Registry/>}/>
          <Route path="/qna" component={<QNA/>}/>
        </Routes>
      </MainContainer>
    </div>
  );

  return content;
};

export default App;
