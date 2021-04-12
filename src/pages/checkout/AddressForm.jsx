import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch } from "react-redux";

export default function AddressForm(props) {
  // { fullName, adress, city, postalCode, country }
  const { setAdressState, adressState } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="fullName"
            label="Full name"
            fullWidth
            value={adressState.fullName}
            name="fullName"
            onChange={(e) =>
              setAdressState({
                ...adressState,
                [e.target.name]: e.target.value,
              })
            }
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="adress"
            label="Address line 1"
            fullWidth
            value={adressState.adress}
            name="adress"
            onChange={(e) =>
              setAdressState({
                ...adressState,
                [e.target.name]: e.target.value,
              })
            }
            autoComplete="shipping address-line1"
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="city"
            label="City"
            fullWidth
            value={adressState.city}
            name="city"
            onChange={(e) =>
              setAdressState({
                ...adressState,
                [e.target.name]: e.target.value,
              })
            }
            autoComplete="shipping address-level2"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            label="Zip / Postal code"
            fullWidth
            name="postalCode"
            value={adressState.postalCode}
            onChange={(e) =>
              setAdressState({
                ...adressState,
                [e.target.name]: e.target.value,
              })
            }
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            label="Country"
            fullWidth
            name="country"
            value={adressState.country}
            onChange={(e) =>
              setAdressState({
                ...adressState,
                [e.target.name]: e.target.value,
              })
            }
            autoComplete="shipping country"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
