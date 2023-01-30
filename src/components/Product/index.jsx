import "./styles.css";

function Products({
  currentSale,
  setCurrentSale,
  id,
  name,
  category,
  price,
  img,
  index,
  item,
}) {
  function hadleTransaction() {
    const transaction = {
      id,
      name,
      category,
      price,
      img,
    };

    const exist = currentSale.find((x) => x.id === item.id);
    if (exist) {
      setCurrentSale(
        currentSale.map((x) =>
          x.id === item.id ? { ...exist, qnt: exist.qnt + 1 } : x
        )
      );
    } else {
      setCurrentSale([...currentSale, { ...transaction, qnt: 1 }]);
    }
  }

  return (
    <div key={index} className="containerProduct">
      <div className="containerImage">
        <img src={img} alt={name}></img>
      </div>
      <div className="containerInfo">
        <span className="nameProduct">{name}</span>
        <span className="category">{category}</span>
        <span className="price">
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button
          className="buttonAdicionar"
          type="submit"
          onClick={() => hadleTransaction()}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}
export default Products;
