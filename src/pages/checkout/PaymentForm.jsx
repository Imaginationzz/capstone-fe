import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { setCreditCard } from "../../redux/actions/paymentActions";

export default function PaymentForm() {
  const { creditCard } = useSelector((state) => state.paymentState);

  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            value={creditCard.cardName}
            onChange={(e) =>
              dispatch(setCreditCard({ cardName: e.target.value }))
            }
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            value={creditCard.cardNumber}
            onChange={(e) =>
              dispatch(setCreditCard({ cardNumber: e.target.value }))
            }
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            value={creditCard.expDate}
            onChange={(e) =>
              dispatch(setCreditCard({ expDate: e.target.value }))
            }
            autoComplete="cc-exp"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            value={creditCard.cvv}
            onChange={(e) => dispatch(setCreditCard({ cvv: e.target.value }))}
            autoComplete="cc-csc"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
