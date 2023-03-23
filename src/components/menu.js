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
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

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
  width: "83%"
});

const MenuBlock = styled(Grid)({
  alignItems: "center",
});

const PageLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "underline rgba(0, 0, 0, 0)",
  color: theme.palette.secondary.main,
  transition: "text-decoration-color 500ms",
  "&:hover": {
    color: "#000000",
    textDecorationColor: "rgba(0, 0, 0, 1)"
  },
}));

const ToolbarSmall = styled(Toolbar)({
  position: "relative",
  width: "100%",
  overflowX: "none",
});

const TitleBlockSmall = styled("div")({
  float: "none",
  position: "absolute",
  left: "50%",
  transform: "translate(-50%)",
  minWidth: "210px"
});

const StyledIconButton = styled(IconButton)({
  marginLeft: "8px",
  marginRight: "8px",
  float: "left"
});

const MainPageLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.secondary.main,
}));

const MenuBar = () => {
  const theme = useTheme();

  const [anchor, setAnchor] = useState(null);
  const [activePage, setActivePage] = useState("home");

  const handleClick = (e) => {
    setAnchor(e.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const handlePageChange = (newPage) => {
    setActivePage(newPage);
    
  };

  let content = (
    <AppBarStyled elevation={1}>
      {useMediaQuery(theme.breakpoints.up("lg")) ? (
        <ToolbarBig>
          <Grid container  justifyContent="space-around" alignItems="center">
            <MenuBlock item>
              <Typography sx={{textDecoration: activePage === "story" ? "underline" : "", color: "green"}}>
                <PageLink to="/story" onClick={() => handlePageChange("story")}>OUR STORY</PageLink>
              </Typography>
            </MenuBlock>

            <MenuBlock item>
              <Typography sx={{textDecoration: activePage === "details" ? "underline" : "", color: "green"}}>
                <PageLink to="/details" onClick={() => handlePageChange("details")}>DETAILS</PageLink>
              </Typography>
            </MenuBlock>

            <MenuBlock item>
              <Typography sx={{textDecoration: activePage === "travel" ? "underline" : "", color: "green"}}>
                <PageLink to="/travel" onClick={() => handlePageChange("travel")}>TRAVEL & KC</PageLink>
              </Typography>
            </MenuBlock>

            <MenuBlock item >
              <Typography variant="h3">
                <MainPageLink to="/" onClick={() => handlePageChange("home")}>HALEY & GRIFFIN</MainPageLink>
              </Typography>
            </MenuBlock>

            <MenuBlock item>
              <Typography sx={{textDecoration: activePage === "weddingparty" ? "underline" : "", color: "green"}}>
                <PageLink to="/weddingparty" onClick={() => handlePageChange("weddingparty")}>WEDDING PARTY</PageLink>
              </Typography>
            </MenuBlock>

            <MenuBlock item>
              <Typography sx={{textDecoration: activePage === "registry" ? "underline" : "", color: "green"}}>
                <PageLink to="/registry" onClick={() => handlePageChange("registry")}>REGISTRY</PageLink>
              </Typography>
            </MenuBlock>

            <MenuBlock item>
              <Typography sx={{textDecoration: activePage === "rsvp" ? "underline" : "", color: "green"}}>
                <PageLink to="/rsvp" onClick={() => handlePageChange("rsvp")}>RSVP</PageLink>
              </Typography>
            </MenuBlock>
          </Grid>
        </ToolbarBig>
      ) : (
        <ToolbarSmall>
          <StyledIconButton onClick={handleClick}>
            <MenuIcon />
          </StyledIconButton>
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
            <PageLink to="/rsvp">
              <MenuItem onClick={handleClose}>
                <Typography>RSVP</Typography>
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
