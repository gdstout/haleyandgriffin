import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Card, Container, Grid, Paper, Typography } from "@mui/material";
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
          <Typography variant="h4" align="center">
            Our Story (Abridged)
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Container maxWidth="md">
            <Typography variant="h6">
              From Overland Park, KS to Arlington, VA, our story spans thousands
              of miles and nearly ten years. We became close friends sitting
              together in junior year Spanish class, and after a short summer of{" "}
              <em>the friendzone</em>, started dating. When graduation came, we
              chose different colleges and decided to try long the dreaded long
              distance; Haley at Alabama and Griffin at Iowa State. Four years
              of Facetime, insomnia cookies, long flights, and a couple of
              degrees later, we landed in Virginia. Along the way, we visited
              each other and made amazing memories; Alabama football games,
              freezing walks across the Iowa State campus, Greek life formals, a
              summer in Colorado. Now we live together in Arlington and can't
              wait to make more.
            </Typography>
          </Container>
        </Grid>
      </Grid>
      <CardContainer container spacing={2}>
        <Grid item lg={3} xs={6}>
          <CardBack>
            <Grid container direction="column" justifyContent="center">
              <Typography variant="h4" align="center">
                {" "}
                How well do you know us?
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
                Where did we first meet? (Before we started dating)
              </CardFront>
            </Card>
            <Card onClick={() => handleFlip(0)}>
              <CardBack>
                Biology class, freshman year of high school (2013).
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
              <CardFront>How long have we been dating?</CardFront>
            </Card>
            <Card onClick={() => handleFlip(1)}>
              <CardBack>6 years and counting!</CardBack>
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
              <CardFront>Where did we get engaged?</CardFront>
            </Card>
            <Card onClick={() => handleFlip(2)}>
              <CardBack>Great Falls National Park in Virginia</CardBack>
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
              <CardFront>Hello</CardFront>
            </Card>
            <Card onClick={() => handleFlip(3)}>
              <CardBack>Hello</CardBack>
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
              <CardFront>Hello</CardFront>
            </Card>
            <Card onClick={() => handleFlip(4)}>
              <CardBack>Hello</CardBack>
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
              <CardFront>Hello</CardFront>
            </Card>
            <Card onClick={() => handleFlip(5)}>
              <CardBack>Hello</CardBack>
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
              <CardFront>Hello</CardFront>
            </Card>
            <Card onClick={() => handleFlip(6)}>
              <CardBack>Hello</CardBack>
            </Card>
          </ReactCardFlip>
        </Grid>
      </CardContainer>
    </Container>
  );
  return content;
};

export default Story;
