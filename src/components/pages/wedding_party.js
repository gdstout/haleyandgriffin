import { Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

import Sprig1 from "../../images/sprig1.png";

const ImgStyled = styled("img")({
  width: "65%",
  paddingBottom: "10px",
  paddingTop: "40px"
});

const WeddingParty = () => {
  let content = (
    <Container maxWidth="md">
      <Grid container direction="row">
        <Grid item xs={6}>
          <Grid container direction="column" alignItems="center">
            <ImgStyled src={Sprig1} />
            <Typography variant="h5">Laura Kaupe</Typography>
            <Typography>Maid of Honor</Typography>

            <ImgStyled src={Sprig1} />
            <Typography variant="h5">MG Burton</Typography>
            <Typography>Bridesmaid</Typography>

            <ImgStyled src={Sprig1} />
            <Typography variant="h5">Tara Reddy</Typography>
            <Typography>Bridesmaid</Typography>

            <ImgStyled src={Sprig1} />
            <Typography variant="h5">Emily DeFoor</Typography>
            <Typography>Bridesmaid</Typography>

            <ImgStyled src={Sprig1} />
            <Typography variant="h5">Taylor DeFoor</Typography>
            <Typography>Bridesmaid</Typography>

            <ImgStyled src={Sprig1} />
            <Typography variant="h5">Carson DeFoor</Typography>
            <Typography>Bridesmaid</Typography>

            <ImgStyled src={Sprig1} />
            <Typography variant="h5">Izzy Simoneaux</Typography>
            <Typography>Bridesmaid</Typography>

            <ImgStyled src={Sprig1} />
            <Typography variant="h5">Logan Van Reken</Typography>
            <Typography>Bridesmaid</Typography>

            <ImgStyled src={Sprig1} />
            <Typography variant="h5">Lea Sophie Pfifer</Typography>
            <Typography>Bridesmaid</Typography>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="column" alignItems="center">
            <ImgStyled src={Sprig1} />
            <Typography variant="h5">Dean Wilcox</Typography>
            <Typography>Best Man</Typography>

            <ImgStyled src={Sprig1} />
            <Typography variant="h5">Carter Stout</Typography>
            <Typography>Groomsman</Typography>

            <ImgStyled src={Sprig1} />
            <Typography variant="h5">Evan Stout</Typography>
            <Typography>Groomsman</Typography>

            <ImgStyled src={Sprig1} />
            <Typography variant="h5">Alex Seager</Typography>
            <Typography>Groomsman</Typography>

            <ImgStyled src={Sprig1} />
            <Typography variant="h5">Sam Talkington</Typography>
            <Typography>Groomsman</Typography>

            <ImgStyled src={Sprig1} />
            <Typography variant="h5">Kyle Marek</Typography>
            <Typography>Groomsman</Typography>

            <ImgStyled src={Sprig1} />
            <Typography variant="h5">Michael Davis</Typography>
            <Typography>Groomsman</Typography>

            <ImgStyled src={Sprig1} />
            <Typography variant="h5">Austin Roy</Typography>
            <Typography>Groomsman</Typography>

            <ImgStyled src={Sprig1} />
            <Typography variant="h5">Will Shatto</Typography>
            <Typography>Groomsman</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
  return content;
};

export default WeddingParty;
