import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Smiley from "../../images/smiley.jpg";
import Sprig1 from "../../images/sprig1.png";

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
          <Typography variant="h2">November 2023</Typography>
        </Grid>
      </Grid>
    </Container>
  );
  return content;
};

export default Home;
