import {
  Button,
  Container,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const initialPlayers = [{ name: "" }, { name: "" }];

const Golf = () => {
  // global states
  const [page, setPage] = useState(0);

  // setup page status (0)
  const [numHoles, setNumHoles] = useState("18");
  const [players, setPlayers] = useState(initialPlayers);
  const [canStart, setCanStart] = useState(false);

  // hole page states (1)
  const [currentHole, setCurrentHole] = useState(0);
  const [scores, setScores] = useState([]);
  // results page states (2)

  const handleNumHolesChange = (e) => {
    setNumHoles(e.target.value);
  };

  const handleNumPlayersChange = (e) => {
    let newPlayers = structuredClone(players);
    if (e.target.value === "-" && players.length > 2) {
      newPlayers.pop();
    }
    if (e.target.value === "+") {
      newPlayers.push({ name: "" });
    }
    setPlayers(newPlayers);
  };

  const handlePlayerNameChange = (index) => (e) => {
    let newPlayers = structuredClone(players);
    newPlayers[index].name = e.target.value;
    setPlayers(newPlayers);
  };

  const checkCanStart = () => {
    setCanStart(true);
    players.forEach((player) => {
      if (player.name.length < 1) {
        setCanStart(false);
      }
    });
  };

  useEffect(() => {
    checkCanStart();
  }, [players]);

  const handlePageChange = (i) => (e) => {
    if (i === 1) {
      const blankScores = Array(parseInt(numHoles))
        .fill()
        .map(() => Array(players.length).fill(4));
      console.log(blankScores);
      setScores(blankScores);
    }
    setPage(i);
  };

  const handleScoresChange = (currentHole, playerIndex) => (e) => {
    let newScores = structuredClone(scores);
    newScores[currentHole][playerIndex] = e.target.value;
    setScores(newScores);
  };

  const handleNext = () => {
    if (currentHole < parseInt(numHoles) - 1) {
      setCurrentHole(currentHole + 1);
    }
  };

  const handlePrevious = () => {
    if (currentHole > 0) {
      setCurrentHole(currentHole - 1);
    } else {
      setPage(0);
    }
  };

  let content = (
    <Container maxWidth="xs">
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="h3">Golf Bet Calcuator</Typography>
        </Grid>
        {page === 0 && (
          <>
            <Grid item>
              <Typography variant="h5">Holes</Typography>
            </Grid>
            <Grid item>
              <ToggleButtonGroup
                value={numHoles}
                onChange={handleNumHolesChange}
                exclusive
                fullWidth
              >
                <ToggleButton value="9">9</ToggleButton>
                <ToggleButton value="18">18</ToggleButton>
              </ToggleButtonGroup>
            </Grid>
            <Grid item>
              <Typography variant="h5">Players</Typography>
            </Grid>
            <Grid item>
              <ToggleButtonGroup onChange={handleNumPlayersChange} fullWidth>
                <ToggleButton value="-">-</ToggleButton>
                <ToggleButton value="+">+</ToggleButton>
              </ToggleButtonGroup>
            </Grid>
            {players.map((player, i) => (
              <Grid item key={i}>
                <TextField
                  key={i}
                  fullWidth
                  label={"Player " + (i + 1)}
                  variant="outlined"
                  color="secondary"
                  value={players[i].name}
                  onChange={handlePlayerNameChange(i)}
                ></TextField>
              </Grid>
            ))}
            <Grid item>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                disabled={!canStart}
                onClick={handlePageChange(1)}
              >
                Start Round
              </Button>
            </Grid>
          </>
        )}
        {page === 1 && (
          <>
            <Grid item>
              <Typography variant="h5">Hole {currentHole + 1}</Typography>
            </Grid>
            {scores[currentHole].map((score, i) => (
              <Grid item key={i}>
                <TextField
                  type="number"
                  label={players[i].name}
                  variant="outlined"
                  color="secondary"
                  value={scores[currentHole][i]}
                  onChange={handleScoresChange(currentHole, i)}
                ></TextField>
              </Grid>
            ))}
            <Grid item>
              <Grid container direction="row" justifyContent="space-between">
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handlePrevious}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleNext}
                >
                  Next Hole
                </Button>
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
  return content;
};

export default Golf;
