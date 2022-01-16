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
  display: "flex",
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
  display: "flex",
  alignItems: "center",
  alignContent: "center",
});

const ToolbarSmall = styled(Toolbar)({
  alignContent: "flex-start",
});

const MenuBlock = styled("div")({
  display: "grid",
  flex: 1,
  flexBasis: "200px",
  minWidth: "150px",
  maxWidth: "200px",
  justifyItems: "center",
});

const TitleBlock = styled("div")({
  flex: 1,
  flexBasis: "450px",
  minWidth: "450px",
  maxWidth: "500px",
  display: "grid",
  justifyItems: "center",
});

const TitleBlockSmall = styled("div")({
  display: "grid",
  justifyItems: "center",
  width: "100%",
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

  const [anchor, setAnchor] = useState(null);

  const handleClick = (e) => {
    setAnchor(e.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  let content = (
    <AppBarStyled>
      {useMediaQuery(theme.breakpoints.up("lg")) ? (
        <ToolbarBig>
          <MenuBlock>
            <Typography>
              <PageLink to="/story">OUR STORY</PageLink>
            </Typography>
          </MenuBlock>

          <MenuBlock>
            <Typography>
              <PageLink to="/details">DETAILS</PageLink>
            </Typography>
          </MenuBlock>

          <MenuBlock>
            <Typography>
              <PageLink to="/travel">TRAVEL & KC</PageLink>
            </Typography>
          </MenuBlock>

          <TitleBlock>
            <Typography variant="h3">
              <MainPageLink to="/">HALEY & GRIFFIN</MainPageLink>
            </Typography>
          </TitleBlock>

          <MenuBlock>
            <Typography>
              <PageLink to="/weddingparty">WEDDING PARTY</PageLink>
            </Typography>
          </MenuBlock>

          <MenuBlock>
            <Typography>
              <PageLink to="/registry">REGISTRY</PageLink>
            </Typography>
          </MenuBlock>

          <MenuBlock>
            <Typography>
              <PageLink to="/qna">Q & A</PageLink>
            </Typography>
          </MenuBlock>
        </ToolbarBig>
      ) : (
        <ToolbarSmall>
          <IconButton onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchor}
            open={Boolean(anchor)}
            keepMounted
            onClose={handleClose}
          >
            <PageLink to="/story">
              <MenuItem onClick={handleClose}>
                <Typography>OUR STORY</Typography>
              </MenuItem>
            </PageLink>
            <PageLink to="/details">
              <MenuItem onClick={handleClose}>
                <Typography>DETAILS</Typography>
              </MenuItem>
            </PageLink>
            <PageLink to="/travel">
              <MenuItem onClick={handleClose}>
                <Typography>TRAVEL & KC</Typography>
              </MenuItem>
            </PageLink>
            <PageLink to="/weddingparty">
              <MenuItem onClick={handleClose}>
                <Typography>WEDDING PARTY</Typography>
              </MenuItem>
            </PageLink>
            <PageLink to="/registry">
              <MenuItem onClick={handleClose}>
                <Typography>REGISTRY</Typography>
              </MenuItem>
            </PageLink>
            <PageLink to="/qna">
              <MenuItem onClick={handleClose}>
                <Typography>Q & A</Typography>
              </MenuItem>
            </PageLink>
          </Menu>
          <TitleBlockSmall>
            <Typography variant="h4">
              <MainPageLink to="/">HALEY & GRIFFIN</MainPageLink>
            </Typography>
          </TitleBlockSmall>
        </ToolbarSmall>
      )}
    </AppBarStyled>
  );
  return content;
};

export default MenuBar;
