import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../redux/actions/productActions";
import HeroCarousel from "../components/carousel";
import Products from "../components/products";
import FadeIn from "react-fade-in";
export default function HomePage({ searchTerm }) {
  const productState = useSelector((state) => state.productState);
  const { loading, error, products } = productState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const filteredProds = searchTerm
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
      )
    : [];
  return (
    <div>
      <FadeIn>
        {!loading && <HeroCarousel products={products} />}
        {!loading && (
          <Products filteredProds={filteredProds} products={products} />
        )}
      </FadeIn>
    </div>
  );
}
