import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const AppBarStyled = styled(AppBar)({
  position: "fixed",
  alignItems: "center",
});

const ToolbarBig = styled(Toolbar)({
  alignContent: "flext-start",
});

const Spacer = styled("div")({
  width: "10px",
});

const MenuBlock = styled("div")({
  width: "150px",
  display: "grid",
  justifyItems: "center",
});

const TitleBlock = styled("div")({
  width: "250px",
  display: "grid",
  justifyItems: "center",
});

const PageLink = styled(Link)({
  textDecoration: "none",
});

const Menu = () => {
  let content = (
    <AppBarStyled>
      <ToolbarBig>
        <MenuBlock>
          <Typography>
            <PageLink to="/story">Our Story</PageLink>
          </Typography>
        </MenuBlock>
        <Spacer />
        <MenuBlock>
          <Typography>
            <PageLink to="/details">Wedding Details</PageLink>
          </Typography>
        </MenuBlock>
        <Spacer />
        <MenuBlock>
          <Typography>
            <PageLink to="/weddingparty">Wedding Party</PageLink>
          </Typography>
        </MenuBlock>
        <Spacer />
        <TitleBlock>
          <Typography variant="h4" align="center">
            <PageLink to='/'>Haley & Griffin</PageLink>
          </Typography>
        </TitleBlock>
        <Spacer />
        <MenuBlock>
          <Typography><PageLink to='/travel'>Travel & KC</PageLink></Typography>
        </MenuBlock>
        <Spacer />
        <MenuBlock>
          <Typography><PageLink to='/registry'>Registry</PageLink></Typography>
        </MenuBlock>
        <Spacer />
        <MenuBlock>
          <Typography><PageLink to='/qna'>Q & A</PageLink></Typography>
        </MenuBlock>
      </ToolbarBig>
    </AppBarStyled>
  );
  return content;
};

export default Menu;
