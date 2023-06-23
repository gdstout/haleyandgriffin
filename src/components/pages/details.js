import React from "react";
import { styled } from "@mui/material/styles";
import HawthorneHouse from "../../images/hawthornehouse1.jpg";
import Chapel from "../../images/chapel1.jpg";
import { Container, Divider, Grid, Typography } from "@mui/material";
import PinDropIcon from "@mui/icons-material/PinDrop";
import CalendarTodayIcon from "@mui/icons-material/Event";
import WeddingTimeline from "../wedding_timeline";

import CheckroomRoundedIcon from "@mui/icons-material/CheckroomRounded";
import AirportShuttleRoundedIcon from "@mui/icons-material/AirportShuttleRounded";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';

const PageContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    padding: "6px",
  },
}));

const TopSpacer = styled("div")(({ theme }) => ({
  height: theme.spacing(3),
  [theme.breakpoints.down("lg")]: {
    height: "0px",
  },
}));
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
    <PageContainer maxWidth="lg">
      <TopSpacer />
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
                  With the ever-changing weather of the Kansas City area, a
                  quick 50 yard walk from ceremony to reception will lend itself
                  to any condition. In the case of a pleasant fall day, the
                  sprawling lawn and covered deck of the reception hall will be
                  a wonderful place to enjoy a cocktail before the reception
                  starts.
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
              <Typography variant="h4">Timeline</Typography>
            </Grid>
            <Grid item xs={12}>
              <WeddingTimeline />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">FAQs</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">What should I wear?</Typography>
              <InfoWrapper>
                <InfoLine>
                  <InfoLineItem>
                    <CheckroomRoundedIcon color="secondary" />
                  </InfoLineItem>
                  <InfoLineItem2>
                    <Typography>
                      Please dress in cocktail/formal attire. Please refer to{" "}
                      <StyledLink
                        href="https://www.brides.com/story/wedding-dress-code-explained"
                        target="_blank"
                        rel="noreferrer"
                      >
                        this guide
                      </StyledLink>{" "}
                      with any questions.
                    </Typography>
                  </InfoLineItem2>
                </InfoLine>
              </InfoWrapper>
              <Typography variant="subtitle1">How can I get there?</Typography>
              <InfoWrapper>
                <InfoLine>
                  <InfoLineItem>
                    <AirportShuttleRoundedIcon color="secondary" />
                  </InfoLineItem>
                  <InfoLineItem2>
                    <Typography>
                      Guests are able to park at the Hawthorne House overnight
                      as long as vehicles are picked up the following morning.
                      For those who do not have a car or may be drinking, we
                      recommend uber or lyft.
                    </Typography>
                  </InfoLineItem2>
                </InfoLine>
              </InfoWrapper>
              <Typography variant="subtitle1">Who can attend?</Typography>
              <InfoWrapper>
                <InfoLine>
                  <InfoLineItem>
                    <PeopleOutlineRoundedIcon color="secondary" />
                  </InfoLineItem>
                  <InfoLineItem2>
                    <Typography>
                    Refer to the RSVP card sent with your invitation regarding
                    the number of seats we reserved in your name(s). While we
                    love everyone in all of your families, this will be an adult
                    only event.
                    </Typography>
                  </InfoLineItem2>
                </InfoLine>
              </InfoWrapper>
              <Typography variant="subtitle1">Is it a cash bar?</Typography>
              <InfoWrapper>
                <InfoLine>
                  <InfoLineItem>
                    <SportsBarIcon color="secondary" />
                  </InfoLineItem>
                  <InfoLineItem2>
                    <Typography>
                      We will be providing an open bar for guests over the age
                      of 21. Cash tips are encouraged.
                    </Typography>
                  </InfoLineItem2>
                </InfoLine>
              </InfoWrapper>

              <Typography variant="subtitle1">What's for dinner?</Typography>
              <InfoWrapper>
                <InfoLine>
                  <InfoLineItem>
                    <LocalDiningIcon color="secondary" />
                  </InfoLineItem>
                  <InfoLineItem2>
                    <Typography>KC BBQ/American. Please note any dietary restrictions when you RSVP.</Typography>
                  </InfoLineItem2>
                </InfoLine>
              </InfoWrapper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={8}>
          <ImgStyled src={Chapel} />
        </Grid>
      </Grid>
    </PageContainer>
  );
  return content;
};

export default Details;
