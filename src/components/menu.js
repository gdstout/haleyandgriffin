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
  width: "83%"
});

const MenuBlock = styled(Grid)({
  alignItems: "center",
});

const PageLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.secondary.main,
  "&:hover": {
    color: "#000000",
    textDecoration: "underline"
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
  minWidth: "285px"
});

const StyledIconButton = styled(IconButton)({
  marginLeft: "8px",
  marginRight: "8px",
  float: "left"
});

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
          <Grid container  justifyContent="space-around" alignItems="center">
            <MenuBlock item>
              <Typography>
                <PageLink to="/story">OUR STORY</PageLink>
              </Typography>
            </MenuBlock>

            <MenuBlock item>
              <Typography>
                <PageLink to="/details">DETAILS</PageLink>
              </Typography>
            </MenuBlock>

            <MenuBlock item>
              <Typography>
                <PageLink to="/travel">TRAVEL & KC</PageLink>
              </Typography>
            </MenuBlock>

            <MenuBlock item >
              <Typography variant="h3">
                <MainPageLink to="/">HALEY & GRIFFIN</MainPageLink>
              </Typography>
            </MenuBlock>

            <MenuBlock item>
              <Typography>
                <PageLink to="/weddingparty">WEDDING PARTY</PageLink>
              </Typography>
            </MenuBlock>

            <MenuBlock item>
              <Typography>
                <PageLink to="/registry">REGISTRY</PageLink>
              </Typography>
            </MenuBlock>

            <MenuBlock item>
              <Typography>
                <PageLink to="/qna">Q & A</PageLink>
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
