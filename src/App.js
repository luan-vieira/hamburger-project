import React, { useState, useEffect } from "react";
import "./App.css";
import Cart from "./components/Cart";

import Header from "./components/Header";
import Main from "./components/Main";
import ProductsList from "./components/ProductsList";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [user, setUser] = useState(""); // input

  useEffect(() => {
    fetch(`https://hamburgueria-kenzie-json-serve.herokuapp.com/products`)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        setFilteredProducts(res);
      });
  }, []);

  return (
    <>
      <Header
        setUser={setUser}
        filteredProducts={filteredProducts}
        setProducts={setProducts}
      ></Header>
      {user !== "" && (
        <span className="resultsFor">
          Resultados para: <span className="valueResultsFor">{user}</span>
        </span>
      )}
      <div className="contanerMainCart">
        <Main>
          <ProductsList
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            products={products}
          ></ProductsList>
        </Main>
        <div>
          <Cart
            setCurrentSale={setCurrentSale}
            currentSale={currentSale}
          ></Cart>
        </div>
      </div>
    </>
  );
}

export default App;
