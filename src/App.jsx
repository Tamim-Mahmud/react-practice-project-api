import React from "react";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <>
      <Header />
      <Button>Sort By Date</Button>
      <Cart></Cart>
    </>
  );
};

export default App;