import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

/**
 * This is super sketchy lol
 * Allows for dangerously set inner HTML to run scripts inside of it
 * Need this to embed the registry into this page.
 */
import InnerHTML from "dangerously-set-html-content";
import { Container } from "@mui/material";

const Registry = () => {
  const zola = `<a class="zola-registry-embed" href="https://www.zola.com/registry/griffinandhaley2023" data-registry-key="griffinandhaley2023"></a><script>!function(e,t,n){var s,a=e.getElementsByTagName(t)[0];e.getElementById(n)||(s=e.createElement(t),s.id=n,s.async=!0,s.src="https://widget.zola.com/js/widget.js",a.parentNode.insertBefore(s,a))}(document,"script","zola-wjs");</script>`;

  const reload = () => {
    window.location = "/registry";
  };

  let content = (
    <Container maxWidth="lg">
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="h3" align="center">
            REGISTRY
          </Typography>
        </Grid>
        <Grid item>
          <Typography align="center">
            We will be flying to KC for the wedding, please ensure gifts are sent to our 750 N Glebe address!
          </Typography>
        </Grid>
        <Grid item>
          <InnerHTML html={zola} />
        </Grid>
        <Grid item>
          <Container maxWidth="sm">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  onClick={reload}
                >
                  Refresh Registry
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  href="https://www.zola.com/registry/griffinandhaley2023"
                  target="_blank"
                >
                  Go to Registry
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
  return content;
};

export default Registry;
