import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  position: "fixed",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.up("lg")]: {
    height: "90px",
  },
  [theme.breakpoints.down("lg")]: {
    height: "75px",
  },
}));

const ToolbarBig = styled(Toolbar)({
  alignContent: "flext-start",
  alignSelf: "center",
});

const Spacer = styled("div")({
  width: "10px",
});

const MenuBlock = styled("div")({
  width: "145px",
  display: "grid",
  justifyItems: "center",
});

const TitleBlock = styled("div")({
  width: "450px",
  display: "grid",
  justifyItems: "center",
});

const PageLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.secondary.main,
  "&:hover": {
    color: "#000000",
  },
}));

const MainPageLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.secondary.main,
}));

const MenuBar = () => {
  const theme = useTheme();

  const [anchor, setAnchor] = useState(false);

  let content = (
    <AppBarStyled>
      {useMediaQuery(theme.breakpoints.up("lg")) ? (
        <ToolbarBig>
          <MenuBlock>
            <Typography>
              <PageLink to="/story">OUR STORY</PageLink>
            </Typography>
          </MenuBlock>
          <Spacer />
          <MenuBlock>
            <Typography>
              <PageLink to="/details">DETAILS</PageLink>
            </Typography>
          </MenuBlock>
          <Spacer />
          <MenuBlock>
            <Typography>
              <PageLink to="/travel">TRAVEL & KC</PageLink>
            </Typography>
          </MenuBlock>

          <Spacer />
          <TitleBlock>
            <Typography variant="h3" align="center">
              <MainPageLink to="/">HALEY & GRIFFIN</MainPageLink>
            </Typography>
          </TitleBlock>
          <Spacer />
          <MenuBlock>
            <Typography>
              <PageLink to="/weddingparty">WEDDING PARTY</PageLink>
            </Typography>
          </MenuBlock>
          <Spacer />
          <MenuBlock>
            <Typography>
              <PageLink to="/registry">REGISTRY</PageLink>
            </Typography>
          </MenuBlock>
          <Spacer />
          <MenuBlock>
            <Typography>
              <PageLink to="/qna">Q & A</PageLink>
            </Typography>
          </MenuBlock>
        </ToolbarBig>
      ) : (
        <Toolbar>
          
          <TitleBlock>
            <Typography variant="h5" align="center">
              <MainPageLink to="/">HALEY & GRIFFIN</MainPageLink>
            </Typography>
          </TitleBlock>
        </Toolbar>
      )}
    </AppBarStyled>
  );
  return content;
};

export default MenuBar;
