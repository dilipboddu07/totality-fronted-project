import { Link } from "react-router-dom";
import "./index.css";

const LoginPage = () => (
  <div className="LoginPageCont">
    <h1 className="loginHeading">Login Page</h1>
    <div className="formCont">
      <form className="loginForm">
        <label for="name">*Name</label>
        <br />
        <input type="text" placeholder="Enter Your Name" id="name" />
        <br />
        <label for="password">*Password</label>
        <br />
        <input type="Password" placeholder="Enter Password" id="password" />
        <br />
        <button type="button">
          <Link to="/">Submit</Link>
        </button>
      </form>
    </div>
  </div>
);

export default LoginPage;
