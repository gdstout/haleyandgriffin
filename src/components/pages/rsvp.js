import {
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import emailjs from "@emailjs/browser";
import MarkEmailReadTwoToneIcon from "@mui/icons-material/MarkEmailReadTwoTone";
import CancelScheduleSendTwoToneIcon from "@mui/icons-material/CancelScheduleSendTwoTone";

const formSinglePassword = "rolltide";
const formPlusOnePassword = "goclones";

const FormGrid = styled(Grid)({
  paddingTop: "25px",
});

const StyledGridItem = styled(Grid)({
  maxHeight: "65px",
});

const SmallTypography = styled(Typography)({
  fontSize: "12px",
  textDecoration: "underline",
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

const RSVP = () => {
  const [password, setPassword] = useState("");
  const [locked, setLocked] = useState(true);
  const [plusOneLocked, setPlusOneLocked] = useState(true);
  const [validForm, setValidForm] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState("Accept");
  const [plusOne, setPlusOne] = useState("No");
  const [plusOneName, setPlusOneName] = useState("");
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");

  const [inSubmission, setInSubmission] = useState(false);
  //0 = not submitted yet, 1 = success, 2 = failure
  const [submitResult, setSubmitResult] = useState(
    JSON.parse(localStorage.getItem("has-rsvpd")) || 0
  );
  const [failedSubmissions, setFailedSubmissions] = useState(0);

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

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleResponse = (e) => {
    setResponse(e.target.value);
    if (e.target.value === "Decline") {
      setPlusOne("No");
      checkValidForm(name, plusOneName, "No");
    } else {
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

  function checkValidForm(firstFieldText, secondFieldText, plusOneParam) {
    if (firstFieldText.match(/\b[a-zA-Z.,]+\s[a-zA-Z.,]+\b/)) {
      if (plusOneParam === "Yes") {
        if (secondFieldText.match(/\b[a-zA-Z.,]+\s[a-zA-Z.,]+\b/)) {
          setValidForm(true);
        } else {
          setValidForm(false);
        }
      } else {
        setValidForm(true);
      }
    } else {
      setValidForm(false);
    }
  }

  const submit = (e) => {
    e.preventDefault();
    setInSubmission(true);
    setSubmitResult(0);

    const formTemplate = {
      name: name,
      answer: response,
      plus1: plusOne,
      plus1Name: plusOneName,
      dietaryRestrictions: dietaryRestrictions,
      toEmail: email,
    };

    emailjs
      .send(
        "service_k5d0bhr",
        "template_ssyqv2q",
        formTemplate,
        process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        function (response) {
          console.log("Success", response.status, response.text);
          setSubmitResult(1);
          setInSubmission(false);
          localStorage.setItem("has-rsvpd", JSON.stringify(1));
        },
        function (error) {
          console.log("Failure", error);
          setSubmitResult(2);
          setInSubmission(false);
          setFailedSubmissions(failedSubmissions + 1);
        }
      );
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
            Please refer to your invitation for your RSVP password. All RSVPs
            due by Sept. 30th.
          </Typography>
        </Grid>
        {submitResult !== 1 && (
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
        )}
      </Grid>
      <FormGrid container direction="column" spacing={2}>
        {!locked && submitResult !== 1 && (
          <>
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
            <Grid item>
              <TextField
                fullWidth
                label="Email (Optional)"
                variant="outlined"
                color="secondary"
                value={email}
                onChange={handleEmail}
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
              <>
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
              </>
            )}

            <Grid item>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                disabled={!validForm}
                onClick={submit}
              >
                {inSubmission ? <CircularProgress size="1.5rem" /> : "Submit"}
              </Button>
            </Grid>
          </>
        )}
        {submitResult !== 0 && (
          <>
            {submitResult === 1 && (
              <>
                <Grid item>
                  <Typography align="center" color="secondary">
                    <MarkEmailReadTwoToneIcon
                      color="secondary"
                      fontSize="large"
                    />
                    <br />
                    We've received your RSVP! Thank you.
                  </Typography>
                </Grid>
                <Grid item>
                  <Tooltip
                    title="If you need to alter your RSVP, please contact us at rsvphaleyandgriffin@gmail.com"
                    arrow
                    enterTouchDelay={0}
                    leaveTouchDelay={10000}
                  >
                    <SmallTypography align="center">
                      Help! I've made a mistake!
                    </SmallTypography>
                  </Tooltip>
                </Grid>
                <Grid item>
                  <br />
                  <br />
                  <Typography align="center">
                    Check out day-of <PageLink to="/details">details</PageLink>,{" "} 
                    KC <PageLink to="/travel">travel and hotel blocks</PageLink>, view
                    our <PageLink to="/registry">registry</PageLink>, or read our <PageLink to="/story">story!</PageLink>
                  </Typography>
                </Grid>
              </>
            )}
            {submitResult === 2 && (
              <Grid item>
                <Typography align="center" color="error">
                  <CancelScheduleSendTwoToneIcon
                    color="error"
                    fontSize="large"
                  />
                  <br />
                  Something went wrong, please try again in a few moments.
                </Typography>
                {failedSubmissions > 1 && (
                  <Typography align="center">
                    If this error persists, please manually RSVP or reach out at
                    rsvphaleyandgriffin@gmail.com
                  </Typography>
                )}
              </Grid>
            )}
          </>
        )}
      </FormGrid>
    </Container>
  );
  return content;
};

export default RSVP;
