import CartProducts from "../cartProduct";
import CartTotal from "../CartTotal";
import "./styles.css";

function Cart({ currentSale, setCurrentSale }) {
  return (
    <div className="containerCart">
      <div className="containerTitleCart">
        <h3>Carrinho de Compras</h3>
      </div>
      {currentSale.length === 0 ? (
        <div className="containerCartVazio">
          <p className="textCartVazio">Sua sacola está vazia</p>
          <p className="textCartAdicione">Adicione itens</p>
        </div>
      ) : (
        <div className="containerProductsCart">
          {currentSale?.map((item, index) => (
            <CartProducts
              setCurrentSale={setCurrentSale}
              key={index}
              index={index}
              item={item}
              currentSale={currentSale}
            ></CartProducts>
          ))}
        </div>
      )}
      {currentSale.length > 0 ? (
        <CartTotal
          setCurrentSale={setCurrentSale}
          currentSale={currentSale}
        ></CartTotal>
      ) : (
        <></>
      )}
    </div>
  );
}
export default Cart;
