import Products from "../Product";
import "./styles.css";

function ProductsList({ currentSale, products, setCurrentSale }) {
  return (
    <>
      {products?.map((item, index) => (
        <Products
          item={item}
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          id={item.id}
          name={item.name}
          category={item.category}
          price={item.price}
          img={item.img}
          key={index}
        />
      ))}
    </>
  );
}
export default ProductsList;
