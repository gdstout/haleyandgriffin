import React from "react";
import { styled } from "@mui/material/styles";
import HawthorneHouse from "../../images/hawthornehouse1.jpg";
import Chapel from "../../images/chapel1.jpg";
import { Container, Divider, Grid, Typography } from "@mui/material";
import PinDropIcon from "@mui/icons-material/PinDrop";
import CalendarTodayIcon from "@mui/icons-material/Event";
import WeddingTimeline from "../wedding_timeline";

const Spacer = styled("div")(({ theme }) => ({
  height: theme.spacing(3),
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

const InfoLine = styled("div")({
  display: "inline-flex",
});

const InfoLineItem = styled("div")({
  display: "inline-flex",
  alignSelf: "center",
});

const InfoLineItem2 = styled("div")({
  display: "inline-flex",
  alignSelf: "center",
  marginLeft: "15px",
});

const Details = () => {
  let content = (
    <Container maxWidth="lg">
      <Spacer />
      <Grid
        container
        direction="row-reverse"
        justifyContent="flex-start"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12} lg={8}>
          <ImgStyled src={HawthorneHouse} />
        </Grid>
        <Grid item xs={12} lg={4}>
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
              <Grid item xs={12}>
                <InfoLine>
                  <InfoLineItem>
                    <CalendarTodayIcon color="secondary" />
                  </InfoLineItem>
                  <InfoLineItem2>
                    <Typography>November 17th, 2023</Typography>
                  </InfoLineItem2>
                </InfoLine>
              </Grid>

              <Grid item xs={12}>
                <InfoLine>
                  <InfoLineItem>
                    <PinDropIcon color="secondary" />
                  </InfoLineItem>
                  <InfoLineItem2>
                    <StyledLink
                      href="https://goo.gl/maps/ouehM5aze2vtN9jh9"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Typography>
                        6008 NW Bell Road
                        <br />
                        Parkville, MO 64152
                      </Typography>
                    </StyledLink>
                  </InfoLineItem2>
                </InfoLine>
              </Grid>
              <Grid item xs={12} />
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12} />
              <Grid item xs={12}>
                <Typography variant="body1">
                  Sitting just north of beautifully quaint Parkville, Missouri,
                  this chapel and event space is perfect for our wedding day.
                  With the ever-changing weather of the Kansas City area, the quick 50
                  yard walk from ceremony to reception will lend itself to any
                  condition. In the case of a pleasant fall day, the sprawling lawn
                  and covered deck of the reception hall will be a wonderful
                  place to enjoy a cocktail before the reception starts.
                </Typography>
              </Grid>
            </Grid>
          </InfoWrapper>
        </Grid>
      </Grid>
      <Spacer />
      <Grid
        container
        direction="row-reverse"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={3}
      >
        <Grid item xs={12} lg={4}>
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <Typography variant="h4">Nov. 17th Timeline</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Please check back when you get an invitation to see our timeline!</Typography>
              {/*<WeddingTimeline />*/}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={8}>
          <ImgStyled src={Chapel} />
        </Grid>
      </Grid>
    </Container>
  );
  return content;
};

export default Details;
