import React from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

export default function Footer() {
  const theme = useTheme();
  const useStyles = makeStyles({
    outerContainer: {
      height: 400,
      background: theme.palette.primary.main,
      color: "#fff",
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.outerContainer}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={3}>
            1
          </Grid>
          <Grid item xs={12} md={3}>
            2
          </Grid>
          <Grid item xs={12} md={3}>
            3
          </Grid>
          <Grid item xs={12} md={3}>
            3
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
