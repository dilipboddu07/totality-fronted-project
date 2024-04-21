import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Component } from "react";
import CartContext from "./context/CartContext";
import Cart from "./components/Cart";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";

class App extends Component {
  state = { CartCont: [] };

  addFunction = (attributes) => {
    const { CartCont } = this.state;
    console.log(attributes);
    this.setState({ CartCont: [...CartCont, attributes] });
  };

  render() {
    const { CartCont } = this.state;
    return (
      <CartContext.Provider value={{ addFunction: this.addFunction, CartCont }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/loginPage" element={<LoginPage />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    );
  }
}
export default App;
