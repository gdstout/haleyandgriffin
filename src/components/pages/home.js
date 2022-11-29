import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Smiley from "../../images/smiley.jpg";

const ImgContainer = styled("div")({
  paddingTop: "30px",
});

const ImgStyled = styled("img")({
  maxHeight: "100%",
  maxWidth: "100%",
  borderRadius: "5px",
});

const Home = () => {
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
            November 2023
          </Typography>
          <Typography variant="h6" align="center">
            Parkville, MO
          </Typography>
        </Grid>
        <Grid item>
          <Container maxWidth="md">
            <Typography variant="h6">
              Welcome to our wedding website! Thanks for helping us celebrate
              our special day; we really appreciate it. Please visit the various
              pages to find out more about us, get day-of information, RSVP, and more!
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
  return content;
};

export default Home;
