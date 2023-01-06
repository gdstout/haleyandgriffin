import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Card, Container, Grid, Typography } from "@mui/material";
import ReactCardFlip from "react-card-flip";
import Map from "../../images/map.png";

const CardBack = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "200px",
  padding: "25px",
});

const CardFront = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.secondary.faded,
  height: "200px",
  color: "white",
  padding: "25px",
}));

const ImgContainer = styled("div")({
  paddingTop: "30px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

const ImgStyled = styled("img")({
  maxHeight: "100%",
  maxWidth: "100%",
  borderRadius: "5px",
});

const CardContainer = styled(Grid)({
  paddingTop: "75px",
  paddingBottom: "25px",
});

const Story = () => {
  const [cards, setCards] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [cardsRaised, setCardsRaised] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleFlip = (index) => {
    setCards((cards) =>
      cards.map((item, idx) => (idx === index ? !item : item))
    );
  };

  const handleRaised = (index) => {
    setCardsRaised((cards) =>
      cardsRaised.map((item, idx) => (idx === index ? !item : item))
    );
  };

  let content = (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ImgContainer>
            <ImgStyled src={Map} />
          </ImgContainer>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            OUR STORY
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Container maxWidth="md">
            <Typography variant="h6">
              From Overland Park, KS to Arlington, VA, Haley and I's story spans
              thousands of miles and nearly ten years. We became close friends
              in our junior year of high school while sitting together in
              Spanish class (thanks, Senora Tritt!), and after a short summer of{" "}
              <em>the friendzone</em>, started dating. When graduation came,
              Haley chose to spend her next four years at Alabama and I at Iowa
              State, and so the dreaded long distance- 886 miles, to be exact-
              began. Four years of Facetime, insomnia cookies, long flights, and
              a couple of degrees later, we landed in Virginia, where Haley
              began working as a Cardiovascular ICU Nurse in Washington, DC, and
              I as a Software Engineer. Along the way, many visits and amazing
              memories were made; Alabama football games, freezing walks across
              the Iowa State campus, a few surprises, a summer in Colorado. Now
              we are ready to get married and continue to create many more.
            </Typography>
          </Container>
        </Grid>
      </Grid>
      <CardContainer container spacing={2}>
        <Grid item lg={3} xs={6}>
          <CardBack>
            <Grid container direction="column" justifyContent="center">
              <Typography variant="h4" align="center">
                HOW WELL DO YOU KNOW US?
              </Typography>
            </Grid>
          </CardBack>
        </Grid>
        <Grid item lg={3} xs={6}>
          <ReactCardFlip isFlipped={cards[0]} flipDirection="horizontal">
            <Card
              onClick={() => handleFlip(0)}
              onMouseOver={() => handleRaised(0)}
              onMouseOut={() => handleRaised(0)}
              raised={cardsRaised[0]}
            >
              <CardFront>
                <Typography variant="h6" align="center">
                  Where did we first meet? (Before we started dating)
                </Typography>
              </CardFront>
            </Card>
            <Card onClick={() => handleFlip(0)}>
              <CardBack>
                <Typography variant="h6" align="center">
                  Biology class, freshman year of high school (2013).
                </Typography>
              </CardBack>
            </Card>
          </ReactCardFlip>
        </Grid>
        <Grid item lg={3} xs={6}>
          <ReactCardFlip isFlipped={cards[1]} flipDirection="horizontal">
            <Card
              onClick={() => handleFlip(1)}
              onMouseOver={() => handleRaised(1)}
              onMouseOut={() => handleRaised(1)}
              raised={cardsRaised[1]}
            >
              <CardFront>
                <Typography variant="h6" align="center">
                  How long have we been dating?
                </Typography>
              </CardFront>
            </Card>
            <Card onClick={() => handleFlip(1)}>
              <CardBack>
                <Typography variant="h6" align="center">
                  6 years and counting!
                </Typography>
              </CardBack>
            </Card>
          </ReactCardFlip>
        </Grid>
        <Grid item lg={3} xs={6}>
          <ReactCardFlip isFlipped={cards[2]} flipDirection="horizontal">
            <Card
              onClick={() => handleFlip(2)}
              onMouseOver={() => handleRaised(2)}
              onMouseOut={() => handleRaised(2)}
              raised={cardsRaised[2]}
            >
              <CardFront>
                <Typography variant="h6" align="center">
                  Where did we get engaged?
                </Typography>
              </CardFront>
            </Card>
            <Card onClick={() => handleFlip(2)}>
              <CardBack>
                <Typography variant="h6" align="center">
                  Great Falls National Park in Virginia
                </Typography>
              </CardBack>
            </Card>
          </ReactCardFlip>
        </Grid>
        <Grid item lg={3} xs={6}>
          <ReactCardFlip isFlipped={cards[3]} flipDirection="horizontal">
            <Card
              onClick={() => handleFlip(3)}
              onMouseOver={() => handleRaised(3)}
              onMouseOut={() => handleRaised(3)}
              raised={cardsRaised[3]}
            >
              <CardFront>
                <Typography variant="h6" align="center">
                  What is our favorite Arlington / DC Spot?
                </Typography>
              </CardFront>
            </Card>
            <Card onClick={() => handleFlip(3)}>
              <CardBack>
                <Typography variant="h6" align="center">
                  O'Sullivan's Irish Pub
                </Typography>
              </CardBack>
            </Card>
          </ReactCardFlip>
        </Grid>
        <Grid item lg={3} xs={6}>
          <ReactCardFlip isFlipped={cards[4]} flipDirection="horizontal">
            <Card
              onClick={() => handleFlip(4)}
              onMouseOver={() => handleRaised(4)}
              onMouseOut={() => handleRaised(4)}
              raised={cardsRaised[4]}
            >
              <CardFront>
                <Typography variant="h6" align="center">
                  What is our song?
                </Typography>
              </CardFront>
            </Card>
            <Card onClick={() => handleFlip(4)}>
              <CardBack>
                <Typography variant="h6" align="center">
                  Vienna, Billy Joel
                </Typography>
              </CardBack>
            </Card>
          </ReactCardFlip>
        </Grid>
        <Grid item lg={3} xs={6}>
          <ReactCardFlip isFlipped={cards[5]} flipDirection="horizontal">
            <Card
              onClick={() => handleFlip(5)}
              onMouseOver={() => handleRaised(5)}
              onMouseOut={() => handleRaised(5)}
              raised={cardsRaised[5]}
            >
              <CardFront>
                <Typography variant="h6" align="center">
                  Who is the tidiest?
                </Typography>
              </CardFront>
            </Card>
            <Card onClick={() => handleFlip(5)}>
              <CardBack>
                <Typography variant="h6" align="center">
                  Haley (or so she claims)
                </Typography>
              </CardBack>
            </Card>
          </ReactCardFlip>
        </Grid>
        <Grid item lg={3} xs={6}>
          <ReactCardFlip isFlipped={cards[6]} flipDirection="horizontal">
            <Card
              onClick={() => handleFlip(6)}
              onMouseOver={() => handleRaised(6)}
              onMouseOut={() => handleRaised(6)}
              raised={cardsRaised[6]}
            >
              <CardFront>
                <Typography variant="h6" align="center">
                  If we could travel anywhere in the world, where would we go?
                </Typography>
              </CardFront>
            </Card>
            <Card onClick={() => handleFlip(6)}>
              <CardBack>
                <Typography variant="h6" align="center">
                  Haley: Paris
                  <br />
                  Griffin: Tierra Del Fuego
                </Typography>
              </CardBack>
            </Card>
          </ReactCardFlip>
        </Grid>
      </CardContainer>
    </Container>
  );
  return content;
};

export default Story;
