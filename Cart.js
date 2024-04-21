import CartContext from "../../context/CartContext";
import Header from "../Header";
import CartEditor from "../CartEditor";
import "./index.css";
const Cart = () => (
  <CartContext.Consumer>
    {(value) => {
      const { CartCont } = value;
      return (
        <div>
          <Header />
          <div className="CartContainer">
            {CartCont.map((each) => (
              <CartEditor each={each} key={each.key} />
            ))}
          </div>
        </div>
      );
    }}
  </CartContext.Consumer>
);
export default Cart;


