import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Smiley from "../../images/smiley.JPG";
import Sprig1 from "../../images/sprig1.png";

const ImgContainer = styled("div")({
  padding: "30px",
  paddingTop: "50px"
});

const ImgStyled = styled("img")({
  maxHeight: "100%",
  maxWidth: "100%",
  borderRadius: "25px"
});

const TextContainerLeft = styled("div")({
  textAlign: "left",
  paddingLeft: 10,
});

const TextContainerRight = styled("div")({
  textAlign: "right",
  paddingRight: 10
});

const DividerBlock = styled("div")({
  display: "grid",
  justifyContent: "center",
});

const Home = () => {
  let content = (
    <Container maxWidth="lg">
      <Grid container justifyContent="center" spacing={3}>
        <Grid item xs={12}>
          <ImgContainer>
            <ImgStyled src={Smiley} />
          </ImgContainer>
        </Grid>

        <Grid item xs={5}>
          <TextContainerRight>
            <Typography variant="h2">November 2023</Typography>
          </TextContainerRight>
        </Grid>
        <Grid item xs={1}>
          <ImgStyled src={Sprig1}/>
        </Grid>
        <Grid item xs={5}>
          <TextContainerLeft>
            <Typography variant="h2">Parkville, MO</Typography>
          </TextContainerLeft>
        </Grid>
      </Grid>
    </Container>
  );
  return content;
};

export default Home;
