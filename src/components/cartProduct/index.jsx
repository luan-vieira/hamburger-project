import "./styles.css";

function cartProducts({ setCurrentSale, currentSale, item }) {
  function removeTransaction() {
    const exist = currentSale.find((x) => x.id === item.id);
    
    if (exist.qnt === 1) {
      setCurrentSale(currentSale.filter((x) => x.id !== item.id));
    } else {
      setCurrentSale(
        currentSale.map((x) =>
          x.id === item.id ? { ...exist, qnt: exist.qnt - 1 } : x
        )
      );
    }
  }

  return (
    <div className="containerCartProduct" key={item.id}>
      <div className="containerImageCart">
        <img src={item.img} alt={item.name}></img>
      </div>
      <div className="containerInfoCart">
        <span className="nameCart">{item.name}</span>
        <span className="categoryCart">{item.category}</span>
        <span className="priceCart">
          {item.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <div>
        <button
          className="buttonRemove"
          onClick={() => removeTransaction(item)}
        >
          Remover
        </button>
        {item.qnt > 1 && <span className="multiplicItemCart">x{item.qnt}</span>}
      </div>
    </div>
  );
}
export default cartProducts;
