import "./styles.css";

function CartTotal({ currentSale, setCurrentSale }) {
  const soma = currentSale.reduce(
    (previus, current) => previus + current.price * current.qnt,
    0
  );

  function removeAll() {
    return setCurrentSale([]);
  }

  return (
    <div className="containerTotal">
      <div className="priceTotal">
        <span className="totalName">Total </span>
        <span className="valuePrice">
          {soma.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <div className="containerButton">
        <button className="buttonRemoveAll" onClick={() => removeAll()}>
          Remover Todos
        </button>
      </div>
    </div>
  );
}
export default CartTotal;
