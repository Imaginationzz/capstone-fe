import React from "react";
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import chairwhite from "../../images/chair_white.svg";
export default function Footer() {
  const theme = useTheme();
  const useStyles = makeStyles({
    outerContainer: {
      marginTop: 100,
      minHeight: 400,
      background: theme.palette.primary.main,
      color: "#fff",
      paddingTop: 100,
      paddingBottom: 100,
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.outerContainer}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={4}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={chairwhite} style={{ width: 100 }} />
              <Typography
                variant="h3"
                style={{ fontWeight: "bold", marginLeft: "1em" }}
              >
                Furniture
              </Typography>
            </div>
            <p>Furniture - -1th Floor, Mars 2048</p>
          </Grid>
          <Grid item xs={12} md={4}>
            <List>
              <ListItem
                style={{ textDecoration: "none", color: "inherit" }}
                component="a"
                href="#"
              >
                <ListItemText>
                  <strong style={{ fontSize: 32 }}>Services</strong>
                </ListItemText>
              </ListItem>
              <ListItem
                style={{ textDecoration: "none", color: "inherit" }}
                component="a"
                href="#"
              >
                <ListItemText>Planning services</ListItemText>
              </ListItem>
              <ListItem
                style={{ textDecoration: "none", color: "inherit" }}
                component="a"
                href="#"
              >
                <ListItemText>Delivery & collection information</ListItemText>
              </ListItem>
              <ListItem
                style={{ textDecoration: "none", color: "inherit" }}
                component="a"
                href="#"
              >
                <ListItemText>Assembly</ListItemText>
              </ListItem>
              <ListItem
                style={{ textDecoration: "none", color: "inherit" }}
                component="a"
                href="#"
              >
                <ListItemText>Kitchen services</ListItemText>
              </ListItem>
              <ListItem
                style={{ textDecoration: "none", color: "inherit" }}
                component="a"
                href="#"
              >
                <ListItemText>Removal & recycling</ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={4}>
            <List>
              <ListItem
                style={{ textDecoration: "none", color: "inherit" }}
                component="a"
                href="#"
              >
                <ListItemText>
                  <strong style={{ fontSize: 32 }}>Help</strong>
                </ListItemText>
              </ListItem>
              <ListItem
                style={{ textDecoration: "none", color: "inherit" }}
                component="a"
                href="#"
              >
                <ListItemText>Track my order</ListItemText>
              </ListItem>
              <ListItem
                style={{ textDecoration: "none", color: "inherit" }}
                component="a"
                href="#"
              >
                <ListItemText>Customer services</ListItemText>
              </ListItem>
              <ListItem
                style={{ textDecoration: "none", color: "inherit" }}
                component="a"
                href="#"
              >
                <ListItemText>FAQs</ListItemText>
              </ListItem>
              <ListItem
                style={{ textDecoration: "none", color: "inherit" }}
                component="a"
                href="#"
              >
                <ListItemText>Return policy</ListItemText>
              </ListItem>
              <ListItem
                style={{ textDecoration: "none", color: "inherit" }}
                component="a"
                href="#"
              >
                <ListItemText>Contact us</ListItemText>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
