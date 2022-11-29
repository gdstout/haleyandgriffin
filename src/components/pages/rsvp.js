import {
  Button,
  Container,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";

const formSinglePassword = "solo";
const formPlusOnePassword = "plus1";

const FormGrid = styled(Grid)({
  paddingTop: "25px",
});

const StyledGridItem = styled(Grid)({
  maxHeight: "65px",
});

const StyledField = styled(TextField)({});

const RSVP = () => {
  const [password, setPassword] = useState("");
  const [locked, setLocked] = useState(true);
  const [plusOneLocked, setPlusOneLocked] = useState(true);
  const [validForm, setValidForm] = useState(false);

  const [name, setName] = useState("");
  const [response, setResponse] = useState("Accept");
  const [plusOne, setPlusOne] = useState("No");
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
    switch (e.target.value) {
      case formSinglePassword:
        setLocked(false);
        break;
      case formPlusOnePassword:
        setLocked(false);
        setPlusOneLocked(false);
        break;
      default:
        setLocked(true);
        setPlusOneLocked(true);
        break;
    }
  };

  const handleName = (e) => {
    setName(e.target.value);
    if(e.target.value.match(/\b[a-zA-Z.,]+\s[a-zA-Z.,]+\b/)){
      setValidForm(true);
    }else{
      setValidForm(false);
    }
  };

  const handleResponse = (e) => {
    setResponse(e.target.value);
  };

  const handlePlusOne = (e) => {
    setPlusOne(e.target.value);
  };

  const handleDietaryRestrictions = (e) => {
    setDietaryRestrictions(e.target.value);
  };

  let content = (
    <Container maxWidth="xs">
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="h3" align="center">
            RSVP
          </Typography>
        </Grid>
        <Grid item>
          <Typography align="center">
            When you recieve an official invitation in the mail, come back here
            to RSVP.
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            color="secondary"
            value={password}
            onChange={handlePasswordInput}
          />
        </Grid>
      </Grid>
      {!locked && (
        <FormGrid container direction="column" spacing={2}>
          <Grid item>
            <Typography align="center">
              Great! Now we just need your info.
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              required
              label="First and Last Name"
              variant="outlined"
              color="secondary"
              value={name}
              onChange={handleName}
            />
          </Grid>
          <StyledGridItem item>
            <ToggleButtonGroup
              value={response}
              color="secondary"
              onChange={handleResponse}
              fullWidth
            >
              <ToggleButton value="Accept">I'm Coming!</ToggleButton>
              <ToggleButton value="Decline">I can't make it</ToggleButton>
            </ToggleButtonGroup>
          </StyledGridItem>
          {response === "Accept" && !plusOneLocked && (
            <StyledGridItem item>
              <ToggleButtonGroup
                value={plusOne}
                color="secondary"
                onChange={handlePlusOne}
                fullWidth
              >
                <ToggleButton value="Yes">I'm using my +1</ToggleButton>
                <ToggleButton value="No">I'm Flying Solo</ToggleButton>
              </ToggleButtonGroup>
            </StyledGridItem>
          )}
          {response === "Accept" && (
            <Grid item>
              <TextField
                fullWidth
                label="Dietary Restrictions"
                variant="outlined"
                color="secondary"
                value={dietaryRestrictions}
                onChange={handleDietaryRestrictions}
              />
            </Grid>
          )}

          <Grid item>
            <Button fullWidth variant="contained" color="secondary" disabled={!validForm}>
              Submit
            </Button>
          </Grid>
        </FormGrid>
      )}
    </Container>
  );
  return content;
};

export default RSVP;
