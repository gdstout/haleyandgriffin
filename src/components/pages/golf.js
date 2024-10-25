import {
  Button,
  Container,
  FormHelperText,
  Grid,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const initialPlayers = [
  { name: "", id: 1  },
  { name: "", id: 2 },
];

const Golf = () => {
  // global states
  const [page, setPage] = useState(0);

  // setup page states (0)
  const [numHoles, setNumHoles] = useState("18");
  const [players, setPlayers] = useState(initialPlayers);
  const [canStart, setCanStart] = useState(false);
  const [bet, setBet] = useState(4.0);
  const [strokeCap, setStrokeCap] = useState(8);

  // hole states (1)
  const [currentHole, setCurrentHole] = useState(0);
  const [scores, setScores] = useState([]);
  const [pars, setPars] = useState([]);

  // results states (2)
  const [payoutMatrix, setPayoutMatrix] = useState([[], []]);
  const [holeResults, setHoleResults] = useState([]);

  const handleNumHolesChange = (e) => {
    setNumHoles(e.target.value);
  };

  const handleBetChange = (e) => {
    setBet(parseFloat(e.target.value));
  };

  const handleStrokeCapChange = (e) => {
    setStrokeCap(parseInt(e.target.value));
  };

  const handleParsChange = (i) => (e) => {
    let newPars = structuredClone(pars);
    newPars[i] = e.target.value;
    setPars(newPars);
  };

  const handleNumPlayersChange = (e) => {
    let newPlayers = structuredClone(players);
    if (e.target.value === "-" && players.length > 2) {
      newPlayers.pop();
    }
    if (e.target.value === "+") {
      newPlayers.push({
        name: "",
        id: players.length + 1,
        holesWon: [],
        holesLost: [],
      });
    }
    setPlayers(newPlayers);
  };

  const handlePlayerNameChange = (index) => (e) => {
    let newPlayers = structuredClone(players);
    newPlayers[index].name = e.target.value;
    setPlayers(newPlayers);
  };

  // monitor canStart
  useEffect(() => {
    if (page === 0) {
      setCanStart(true);
      players.forEach((player) => {
        if (player.name.length < 1) {
          setCanStart(false);
        }
      });
    }
  }, [players, page]);

  const handlePageChange = (i) => (e) => {
    // setup scores, resultsArray, and betMatrix
    if (i === 1) {
      const blankScores = Array(parseInt(numHoles))
        .fill()
        .map(() => Array(players.length).fill(4));
      setScores(blankScores);

      const blankPayoutMatrix = Array(players.length)
        .fill()
        .map(() => Array(players.length).fill(0));
      setPayoutMatrix(blankPayoutMatrix);

      const blankHoleResults = Array(parseInt(numHoles)).fill({
        winners: [],
        losers: [],
      });
      setHoleResults(blankHoleResults);

      const blankPars = Array(parseInt(numHoles)).fill(4);
      setPars(blankPars);
    }
    setPage(i);
  };

  const handleScoresChange = (currentHole, playerIndex, toggle) => (e) => {
    let newScores = structuredClone(scores);
    if (toggle) {
      if (e.target.value === "-") {
        newScores[currentHole][playerIndex] =
          parseInt(newScores[currentHole][playerIndex]) - 1;
      } else {
        newScores[currentHole][playerIndex] =
          parseInt(newScores[currentHole][playerIndex]) + 1;
      }
    } else {
      newScores[currentHole][playerIndex] = parseInt(e.target.value);
    }
    setScores(newScores);
  };

  // calculate bet payouts and player scores every time the score changes
  useEffect(() => {
    let newHoleResults = structuredClone(holeResults);

    scores.forEach((holeScores, i) => {
      newHoleResults[i] = calculateHoleResults(holeScores);
    });
    let newPayoutMatrix = updatePayoutMatrix(newHoleResults);

    setHoleResults(newHoleResults);
    setPayoutMatrix(newPayoutMatrix);
  }, [scores, currentHole]);

  function calculateHoleResults(holeScores) {
    let lowestScore = holeScores[0];
    let highestScore = holeScores[0];
    let result = { winners: [], losers: [], push: true };

    // find lowest and highest scores or push
    holeScores.forEach((score, i) => {
      if (score < lowestScore) {
        lowestScore = score;
        result.push = false;
      }
      if (score > highestScore) {
        highestScore = score;
        result.push = false;
      }
    });

    if (result.push) return result;

    // find winners and losers
    holeScores.forEach((score, i) => {
      if (score === lowestScore) {
        result.winners.push(i);
      }
      if (score === highestScore) {
        result.losers.push(i);
      }
    });
    return result;
  }

  function updatePayoutMatrix(holeResults) {
    let tmpPayoutMatrix = Array(players.length)
      .fill()
      .map(() => Array(players.length).fill(0));
    // add up all payments
    holeResults.forEach((result, i) => {
      if (i <= currentHole) {
        result.losers.forEach((loser) => {
          result.winners.forEach((winner) => {
            tmpPayoutMatrix[loser][winner] =
              tmpPayoutMatrix[loser][winner] +
              bet / result.winners.length / result.losers.length;
          });
        });
      }
    });

    // eliminate payments across
    for (let i = 0; i < players.length; i++) {
      for (let j = 0; j < players.length; j++) {
        if (i === j) {
          //continue;
        }
        if (tmpPayoutMatrix[i][j] >= tmpPayoutMatrix[j][i]) {
          tmpPayoutMatrix[i][j] = tmpPayoutMatrix[i][j] - tmpPayoutMatrix[j][i];
          tmpPayoutMatrix[j][i] = 0;
        }
      }
    }

    return tmpPayoutMatrix;
  }

  function getPlayerScore(i) {
    let curScore = 0;
    let par = 0;
    for(let j = 0; j <= currentHole; j ++){
      par = par + pars[j];
      curScore = curScore + scores[j][i];
    }
    return {score: curScore - par, strokes: curScore};
  }

  const handleNext = () => {
    if (currentHole < parseInt(numHoles) - 1) {
      setCurrentHole(currentHole + 1);
    } else {
      setPage(2);
    }
  };

  const handlePrevious = () => {
    if (currentHole > 0) {
      if (page === 2) {
        setPage(1);
      } else {
        setCurrentHole(currentHole - 1);
      }
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
                <ToggleButton color="secondary" value="9">
                  9
                </ToggleButton>
                <ToggleButton color="secondary" value="18">
                  18
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
            <Grid item>
              <Typography variant="h5">Bet</Typography>
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                label="Amount"
                type="number"
                variant="filled"
                color="secondary"
                value={bet}
                onChange={handleBetChange}
              ></TextField>
            </Grid>
            <Grid item>
              <Typography variant="h5">Stroke Cap</Typography>
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                label="Cap"
                type="number"
                variant="filled"
                color="secondary"
                value={strokeCap}
                onChange={handleStrokeCapChange}
              ></TextField>
            </Grid>
            <Grid item>
              <Typography variant="h5">Players</Typography>
            </Grid>
            <Grid item>
              <ToggleButtonGroup onChange={handleNumPlayersChange} fullWidth>
                <ToggleButton color="secondary" value="-">
                  -
                </ToggleButton>
                <ToggleButton color="secondary" value="+">
                  +
                </ToggleButton>
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
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Typography variant="h5">Hole {currentHole + 1}</Typography>
                </Grid>
                <Grid item>
                  <Select
                    color="secondary"
                    size="small"
                    onChange={handleParsChange(currentHole)}
                    value={pars[currentHole]}
                  >
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            </Grid>
            {scores[currentHole].map((score, i) => (
              <Grid item key={i}>
                <Grid container direction="row" justifyContent="space-between">
                  <Grid item>
                    <TextField
                      type="number"
                      label={players[i].name}
                      variant="outlined"
                      color="secondary"
                      value={scores[currentHole][i]}
                      onChange={handleScoresChange(currentHole, i, false)}
                    />
                  </Grid>
                  <Grid item>
                    <ToggleButtonGroup
                      onChange={handleScoresChange(currentHole, i, true)}
                    >
                      <ToggleButton value="-" size="large">
                        -
                      </ToggleButton>
                      <ToggleButton value="+" size="large">
                        +
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </>
        )}
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {page > 0 && (
              <Button
                variant="outlined"
                color="secondary"
                onClick={handlePrevious}
              >
                Back
              </Button>
            )}
            {page === 1 && (
              <Button
                variant="contained"
                color="secondary"
                onClick={handleNext}
              >
                Next Hole
              </Button>
            )}
          </Grid>
        </Grid>
        {page > 0 && (
          <>
            <Grid item>
              <Typography variant="h5">Results</Typography>
            </Grid>
            {players.map((player, i) => (
              <Grid item key={player.name}>
                <Typography>{player.name}: {getPlayerScore(i).strokes} ({getPlayerScore(i).score > 0 && (<>+</>)}{getPlayerScore(i).score})</Typography>
              </Grid>
            ))}
            {payoutMatrix.map((loser, i) => (
              <>
                {loser.map((amount, j) => (
                  <>
                    {i !== j && amount > 0 ? (
                      <Grid item>
                        <Typography>
                          {players[i].name} owes {players[j].name} ${amount}
                        </Typography>
                      </Grid>
                    ) : (
                      <></>
                    )}
                  </>
                ))}
              </>
            ))}
          </>
        )}
      </Grid>
    </Container>
  );
  return content;
};

export default Golf;
