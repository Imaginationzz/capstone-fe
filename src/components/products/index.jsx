import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import SingleProduct from "../singleproduct";

export default function Products(props) {
  const { products, filteredProds } = props;
  return (
    <Container>
      <Typography variant="h4" style={{ marginBottom: 25, marginTop: 50 }}>
        Products
      </Typography>
      <hr style={{ marginBottom: 25 }} />
      <Grid container spacing={3}>
        {filteredProds.length > 0
          ? filteredProds.map((product) => (
              <Grid key={product._id} item xs={12} sm={6} md={4} lg={3}>
                <SingleProduct product={product} />
              </Grid>
            ))
          : products.map((product) => (
              <Grid key={product._id} item xs={12} sm={6} md={4} lg={3}>
                <SingleProduct product={product} />
              </Grid>
            ))}
      </Grid>
    </Container>
  );
}
