import { Link } from "react-router-dom";
import { House, Bag, Person, List } from "react-bootstrap-icons";

import "./index.css";

const Header = (props) => {
  const { detailsChange } = props;

  return (
    <nav className="navbar">
      <img
        src="https://www.shutterstock.com/image-vector/vector-illustration-cool-detailed-red-260nw-94498447.jpg"
        alt="House"
        className="logoImg"
      />
      <ul>
        <Link to="/">
          <House className="iconImg" />
          <li>Home</li>
        </Link>
        <Link to="/bookings">
          <List className="iconImg" />
          <li>Bookings</li>
        </Link>
        <Link to="/cart">
          <Bag className="iconImg" />
          <li>Cart</li>
        </Link>
        <Link to="/loginPage">
          <Person className="iconImg" />
          <li>Login</li>
        </Link>
        <li className="selector">
          <img
            className="locationLogo"
            src="https://media.istockphoto.com/id/1193451471/vector/map-pin-vector-glyph-icon.jpg?s=612x612&w=0&k=20&c=wuWVeHuthNAXzjOO5_VY9SUOd-6cxwpVH8VVfh6Y7Lc="
            alt="Location"
          />
          <select name="Location" onChange={detailsChange}>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
          </select>
        </li>
      </ul>
    </nav>
  );
};
export default Header;
