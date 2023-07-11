import { Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

import Sprig1 from "../../images/sprig1.png";
import MG from "../../images/mg.png";
import Dean from "../../images/dean.png";
import Carter from "../../images/carter.png";
import Kyle from "../../images/kyle.png";
import Evan from "../../images/evan.png";
import Izzy from "../../images/izzy.png";
import Logan from "../../images/logan.png";
import Carson from "../../images/carson.png";
import Taylor from "../../images/taylor.png";
import Tara from "../../images/tara.png";
import Alex from "../../images/alex.png";
import Will from "../../images/will.png";
import Sam from "../../images/sam.png";
import Laura from "../../images/laura.png";
import Mike from "../../images/mike.png";
import Emily from "../../images/emily.png";
import Lea from "../../images/lea.png";

const PageContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    padding: "0px",
  },
}));

const ImgStyled = styled("img")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    width: "75%",
  },
  [theme.breakpoints.down("lg")]: {
    width: "95%",
  },
  paddingBottom: "10px",
  paddingTop: "40px",
}));

const WeddingParty = () => {
  let content = (
    <PageContainer maxWidth="md">
      <Grid container direction="row">
        <Grid item xs={6}>
          <Grid container direction="column" alignItems="center">
            <ImgStyled src={Laura} />
            <Typography variant="h5">Laura Kaupe</Typography>
            <Typography>Maid of Honor</Typography>

            <ImgStyled src={MG} />
            <Typography variant="h5">MG Burton</Typography>
            <Typography>Bridesmaid</Typography>

            <ImgStyled src={Tara} />
            <Typography variant="h5">Tara Reddy</Typography>
            <Typography>Bridesmaid</Typography>

            <ImgStyled src={Emily} />
            <Typography variant="h5">Emily DeFoor</Typography>
            <Typography>Bridesmaid</Typography>

            <ImgStyled src={Taylor} />
            <Typography variant="h5">Taylor DeFoor</Typography>
            <Typography>Bridesmaid</Typography>

            <ImgStyled src={Carson} />
            <Typography variant="h5">Carson DeFoor</Typography>
            <Typography>Bridesmaid</Typography>

            <ImgStyled src={Izzy} />
            <Typography variant="h5">Izzy Simoneaux</Typography>
            <Typography>Bridesmaid</Typography>

            <ImgStyled src={Logan} />
            <Typography variant="h5">Logan van Reken</Typography>
            <Typography>Bridesmaid</Typography>

            <ImgStyled src={Lea} />
            <Typography variant="h5">Lea Sophie Pfeifer</Typography>
  <Typography>Bridesmaid</Typography>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container direction="column" alignItems="center">
            <ImgStyled src={Dean} />
            <Typography variant="h5">Dean Wilcox</Typography>
            <Typography>Best Man</Typography>

            <ImgStyled src={Carter} />
            <Typography variant="h5">Carter Stout</Typography>
            <Typography>Groomsman</Typography>

            <ImgStyled src={Evan} />
            <Typography variant="h5">Evan Stout</Typography>
            <Typography>Groomsman</Typography>

            <ImgStyled src={Will} />
            <Typography variant="h5">Will Shatto</Typography>
            <Typography>Groomsman</Typography>

            <ImgStyled src={Alex} />
            <Typography variant="h5">Alex Seager</Typography>
            <Typography>Groomsman</Typography>

            <ImgStyled src={Sam} />
            <Typography variant="h5">Sam Talkington</Typography>
            <Typography>Groomsman</Typography>

            <ImgStyled src={Kyle} />
            <Typography variant="h5">Kyle Marek</Typography>
            <Typography>Groomsman</Typography>

            <ImgStyled src={Mike} />
            <Typography variant="h5">Michael Davis</Typography>
            <Typography>Groomsman</Typography>

            {/*<ImgStyled src={Sprig1} />
            <Typography variant="h5">Austin Roy</Typography>
  <Typography>Groomsman</Typography>*/}
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
  return content;
};

export default WeddingParty;
