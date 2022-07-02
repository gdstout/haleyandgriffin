import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "@emotion/styled";
import MenuBar from "./menu";
import { Container } from "@mui/material";
import Home from "./pages/home";
import Story from "./pages/story";
import WeddingParty from "./pages/wedding_party";
import Details from "./pages/details";
import Travel from "./pages/travel";
import Registry from "./pages/registry";
import QNA from "./pages/qna";
import Footer from "./footer";

const MainContainer = styled(Container)(({ theme }) => ({
  paddingTop: "95px",
}));

const App = () => {
  let content = (
    <div>
      <MenuBar />
      <MainContainer maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/story" element={<Story />} />
          <Route path="/details" element={<Details />} />
          <Route path="/weddingparty" element={<WeddingParty />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/qna" element={<QNA />} />
        </Routes>
      </MainContainer>
      <Footer />
    </div>
  );

  return content;
};

export default App;
