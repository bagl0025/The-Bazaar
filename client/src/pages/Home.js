import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Jumbotron from "../components/Jumbotron";

const Home = () => {
  return (
    <div className="container">
      <Jumbotron />
      <div className="bodyContainer">
        <CategoryMenu />
      <div className="eightypct">
        <ProductList />
        <Cart />
      </div>
      </div>
    </div>
  );
};

export default Home;
