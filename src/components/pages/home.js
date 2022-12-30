import React from "react";
import { Container, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import Smiley from "../../images/smiley.jpg";

const ImgContainer = styled("div")({
  paddingTop: "30px",
});

const ImgStyled = styled("img")({
  maxHeight: "100%",
  maxWidth: "100%",
  borderRadius: "5px",
});

const PageLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "underline rgba(0, 0, 0, 0)",
  color: theme.palette.secondary.main,
  transition: "text-decoration-color 500ms",
  "&:hover": {
    color: "#000000",
    textDecorationColor: "rgba(0, 0, 0, 1)",
  },
}));

const Home = () => {
  const theme = useTheme();
  let content = (
    <Container maxWidth="lg">
      <Grid container justifyContent="center" spacing={2} direction="column">
        <Grid item>
          <ImgContainer>
            <ImgStyled src={Smiley} />
          </ImgContainer>
        </Grid>

        <Grid item>
          <Typography variant="h2" align="center">
            NOVEMBER 2023
          </Typography>
          <Typography variant="h6" align="center">
            Parkville, MO
          </Typography>
        </Grid>
        <Grid item>
          <Container maxWidth="md">
            <Typography variant="h6" align="center">
              Welcome to our wedding website! Thanks for helping us celebrate
              our special day; we really appreciate it. Please visit the various
              pages to find out more about us, get day-of information, RSVP, and
              more!
            </Typography>
          </Container>
        </Grid>
        {!useMediaQuery(theme.breakpoints.up("lg")) && (
        <Grid item>
          <br/>
          <Typography align="center" variant="h6">
            <PageLink to="/details">DETAILS</PageLink>
            {" • "}
            <PageLink to="/registry">REGISTRY</PageLink>
            {" • "}
            <PageLink to="/rsvp">RSVP</PageLink>
          </Typography>
        </Grid>
)}
      </Grid>
    </Container>
  );
  return content;
};

export default Home;
