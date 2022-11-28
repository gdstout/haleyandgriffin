import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Card, Container, Grid, Paper, Typography } from "@mui/material";
import ReactCardFlip from "react-card-flip";


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
        <Grid item lg={3} xs={6}>
          <CardBack>
            <Typography variant="h4">Pop Quiz</Typography>
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
                This is the first question of the quiz, do you know it?
              </CardFront>
            </Card>
            <Card onClick={() => handleFlip(0)}>
              <CardBack>Hello</CardBack>
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
              <CardFront>Hello</CardFront>
            </Card>
            <Card onClick={() => handleFlip(1)}>
              <CardBack>Hello</CardBack>
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
              <CardFront>Hello</CardFront>
            </Card>
            <Card onClick={() => handleFlip(2)}>
              <CardBack>Hello</CardBack>
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
      </Grid>
    </Container>
  );
  return content;
};

export default Story;
