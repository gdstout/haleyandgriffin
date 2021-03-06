import React from "react";
import { styled } from "@mui/material/styles";
import HawthorneHouse from "../../images/hawthornehouse1.jpeg";
import Chapel from "../../images/chapel1.jpg";
import { Container, Divider, Grid, Typography } from "@mui/material";
import PinDropIcon from "@mui/icons-material/PinDrop";
import CalendarTodayIcon from "@mui/icons-material/Event";
import WeddingTimeline from "../wedding_timeline";

const Spacer = styled("div")(({theme}) => ({
  height: theme.spacing(3)
}));

const ImgStyled = styled("img")({
  maxHeight: "100%",
  maxWidth: "100%",
  borderRadius: "5px",
});

const StyledLink = styled("a")(({ theme }) => ({
  color: theme.palette.secondary.main,
  "&:hover": {
    color: "#000000",
  },
}));

const InfoWrapper = styled("div")({
  margin: "10px",
});

const Details = () => {
  let content = (
    <Container maxWidth="lg">
      <Grid container justifyContent="center">
        <h1>WEDDING DETAILS</h1>
      </Grid>

      <Grid
        container
        direction="row-reverse"
        justifyContent="flex-start"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12} md={8}>
            <ImgStyled src={HawthorneHouse} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid item xs={12}>
            <Typography variant="h4">The Hawthorne House</Typography>
          </Grid>
          <InfoWrapper>
            <Grid
              container
              alignItems="center"
              justifyContent="flex-start"
              spacing={1}
            >
              <Grid item xs={2}>
                <CalendarTodayIcon />
              </Grid>
              <Grid item xs={10}>
                <Typography variant="body1">November 17th, 2023</Typography>
              </Grid>
              <Grid item xs={2}>
                <PinDropIcon />
              </Grid>
              <Grid item xs={10}>
                <StyledLink
                  href="https://goo.gl/maps/ouehM5aze2vtN9jh9"
                  target="_blank"
                  rel="noreferrer"
                >
                  6008 NW Bell Road
                  <br />
                  Parkville, MO 64152
                </StyledLink>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  Dressed in gold Italian crystal chandeliers, cathedral
                  ceilings, hardwood floors and windows on all sides, the
                  Emerson Room is the perfect place to host your event! In our
                  reception packages, we include the set up and tear down of our
                  in house tables, chairs with cushions and floor length linens
                  to help create a stress-free day.
                </Typography>
              </Grid>
            </Grid>
          </InfoWrapper>
        </Grid>
      </Grid>
      <Spacer/>
      <Grid
        container
        direction="row-reverse"
        justifyContent="flext-start"
        alignItems="flex-start"
        spacing={3}
      >
        <Grid item xs={12} md={4}>
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <Typography variant="h4">Nov. 17th Timeline</Typography>
            </Grid>
            <Grid item xs={12}>
              <WeddingTimeline />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={8}>
            <ImgStyled src={Chapel} />
        </Grid>
      </Grid>
    </Container>
  );
  return content;
};

export default Details;
