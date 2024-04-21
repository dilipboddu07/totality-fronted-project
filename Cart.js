import CartContext from "../../context/CartContext";
import Header from "../Header";
import CartEditor from "../CartEditor";
import "./index.css";
const Cart = () => (
  <CartContext.Consumer>
    {(value) => {
      const { CartCont } = value;
      const length = CartCont.length;
      return (
        <div>
          {length === 0 ? (
            <div className="CartContainer">
              <Header />
              <h1>Cart Empty</h1>
            </div>
          ) : (
            <div>
              <div>
                <Header />
                <div className="CartContainer">
                  {CartCont.map((each) => (
                    <CartEditor each={each} key={each.key} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }}
  </CartContext.Consumer>
);
export default Cart;
