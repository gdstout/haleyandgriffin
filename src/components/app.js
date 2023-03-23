import React from "react";
import { Route, useLocation } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import styled from "@emotion/styled";
import MenuBar from "./menu";
import { Container } from "@mui/material";
import Home from "./pages/home";
import Story from "./pages/story";
import WeddingParty from "./pages/wedding_party";
import Details from "./pages/details";
import Travel from "./pages/travel";
import Registry from "./pages/registry";
import RSVP from "./pages/rsvp";
import Footer from "./footer";

const PageContainer = styled("div")({
  position: "relative",
  minHeight: "100vh",
});

const MainContainer = styled(Container)(({ theme }) => ({
  paddingTop: "95px",
  paddingBottom: "85px",
}));

const pages = [
  "/story",
  "/details",
  "/travel",
  "/",
  "/weddingparty",
  "/registry",
  "/rsvp",
];

const App = () => {
  const location = useLocation();
  let content = (
    <PageContainer>
      <MenuBar />
      <MainContainer maxWidth="lg">
        <SlideRoutes location={location} duration={600} pathList={pages}>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/details" element={<Details />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/weddingparty" element={<WeddingParty />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/rsvp" element={<RSVP />} />
        </SlideRoutes>
      </MainContainer>

      <Footer />
    </PageContainer>
  );

  return content;
};

export default App;
