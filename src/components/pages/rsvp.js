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
  const [plusOneName, setPlusOneName] = useState("");
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");

  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
    switch (e.target.value) {
      case formSinglePassword:
        setLocked(false);
        setPlusOne("No");
        break;
      case formPlusOnePassword:
        setLocked(false);
        setPlusOneLocked(false);
        break;
      default:
        setLocked(true);
        setPlusOneLocked(true);
        setPlusOne("No");
        break;
    }
  };

  const handleName = (e) => {
    setName(e.target.value);
    checkValidForm(e.target.value, plusOneName, plusOne);
  };

  const handleResponse = (e) => {
    setResponse(e.target.value);
    if(e.target.value === "Decline"){
      setPlusOne("No");
      checkValidForm(name, plusOneName, "No");
    }else {
      checkValidForm(name, plusOneName, plusOne);
    }
  };

  const handlePlusOne = (e) => {
    setPlusOne(e.target.value);
    checkValidForm(name, plusOneName, e.target.value);
  };

  const handlePlusOneName = (e) => {
    setPlusOneName(e.target.value);
    checkValidForm(name, e.target.value, plusOne);
  };

  const handleDietaryRestrictions = (e) => {
    setDietaryRestrictions(e.target.value);
  };

  function checkValidForm(firstFieldText, secondFieldText, plusOneParam){
    if(firstFieldText.match(/\b[a-zA-Z.,]+\s[a-zA-Z.,]+\b/)){
      if(plusOneParam === "Yes"){
        if(secondFieldText.match(/\b[a-zA-Z.,]+\s[a-zA-Z.,]+\b/)){
          setValidForm(true);
        }else{
          setValidForm(false);
        }
      }else{
        setValidForm(true);
      }
    }else{
      setValidForm(false);
    }
  }

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
              label="Your First and Last Name"
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
                <ToggleButton value="No">It's just me</ToggleButton>
              </ToggleButtonGroup>
            </StyledGridItem>
          )}
          {response === "Accept" && plusOne === "Yes" && !plusOneLocked && (
            <Grid item>
              <TextField
                fullWidth
                required
                label="+1's First and Last Name"
                helperText="We need a name for placecards at the reception!"
                variant="outlined"
                color="secondary"
                value={plusOneName}
                onChange={handlePlusOneName}
              />
            </Grid>
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
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              disabled={!validForm}
            >
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
