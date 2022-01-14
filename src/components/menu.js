import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import styled from "@emotion/styled";

const AppBarStyled = styled(AppBar)({
  position: "fixed",
  alignItems: "center",
});

const ToolbarBig = styled(Toolbar)({
  alignContent: "flext-start",
});

const Spacer = styled("div")({
  width: "15px",
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

const Menu = () => {
  let content = (
    <AppBarStyled>
      <ToolbarBig>
        <MenuBlock>
          <Typography>Our Story</Typography>
        </MenuBlock>
        <Spacer />
        <MenuBlock>
          <Typography>Wedding Details</Typography>
        </MenuBlock>
        <Spacer />
        <MenuBlock>
          <Typography>Wedding Party</Typography>
        </MenuBlock>
        <Spacer />
        <TitleBlock>
          <Typography variant="h4" align="center">
            Haley & Griffin
          </Typography>
        </TitleBlock>
        <Spacer />
        <MenuBlock>
          <Typography>Travel & KC</Typography>
        </MenuBlock>
        <Spacer />
        <MenuBlock>
          <Typography>Registry</Typography>
        </MenuBlock>
        <Spacer />
        <MenuBlock>
          <Typography>Q & A</Typography>
        </MenuBlock>
      </ToolbarBig>
    </AppBarStyled>
  );
  return content;
};

export default Menu;
