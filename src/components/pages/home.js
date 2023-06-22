import React from "react";
import {
  Container,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import Smiley from "../../images/smiley.jpg";

const { DateTime } = require("luxon");

const weddingDate = DateTime.fromISO("2023-11-17");
const engagementDate = DateTime.fromISO("2021-11-18");
const startDate = DateTime.fromISO("2016-11-18");

const daysLeft = weddingDate.diff(DateTime.now(), ["days"]).toObject();
const totalTime = DateTime.now().diff(startDate, ["days"]).toObject();
const timeEngaged = DateTime.now().diff(engagementDate, ["days"]).toObject();

const PageContainer = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    padding: "6px",
  },
}));

const ImgContainer = styled("div")(({ theme }) => ({
  paddingTop: "30px",
  [theme.breakpoints.down("lg")]: {
    paddingTop: "0px",
  },
}));

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
    <PageContainer maxWidth="lg">
      <Grid container justifyContent="center" spacing={2} direction="column">
        <Grid item>
          <ImgContainer>
            <ImgStyled src={Smiley} />
          </ImgContainer>
        </Grid>

        <Grid item>
          {!useMediaQuery(theme.breakpoints.up("lg")) ? (
            <Typography variant="h2" align="center">
              NOVEMBER 2023
            </Typography>
          ) : (
            <Typography variant="h1" align="center">
              NOVEMBER 2023
            </Typography>
          )}
          <Typography variant="h5" align="center">
            PARKVILLE, MO
          </Typography>
        </Grid>
        <Grid item>
          <Container maxWidth="md">
            <Typography variant="h6" align="center">
              {" "}
              <em>
                {Math.round(totalTime.days)} days together
                <br /> {Math.round(timeEngaged.days)} days engaged
                <br /> {Math.round(daysLeft.days)} day
                {Math.round(daysLeft.days) !== 1 && "s"} until forever
              </em>
            </Typography>
          </Container>
        </Grid>
        {!useMediaQuery(theme.breakpoints.up("lg")) && (
          <Grid item>
            <br />
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
    </PageContainer>
  );
  return content;
};

export default Home;
