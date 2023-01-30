import React, { useState } from "react";
import "./styles.css";

function Header({ setUser, setProducts, filteredProducts }) {
  const [userInput, setUserInput] = useState("");

  function filterProducts(userInput) {
    const productsFilter = filteredProducts?.filter((item) => {
      return (
        item.name.toLowerCase().includes(userInput.toLowerCase()) ||
        item.category.toLowerCase().includes(userInput.toLowerCase())
      );
    });

    return setProducts(productsFilter);
  }

  function handleResultsFor(value) {
    setUser(userInput);
    setUserInput(userInput);
    filterProducts(userInput);
    setUserInput("");
  }

  return (
    <>
      <header className="theHeader">
        <div className="containerTitle">
          <h1>Burger</h1>
          <h2>Kenzie</h2>
        </div>
        <form className="form" onSubmit={(event) => event.preventDefault()}>
          <input
            className="input"
            type="text"
            value={userInput}
            placeholder="Digitar Pesquisa"
            onChange={(event) => setUserInput(event.target.value)}
          />
          <button onClick={handleResultsFor} className="button" type="submit">
            Pesquisar
          </button>
        </form>
      </header>
    </>
  );
}
export default Header;
