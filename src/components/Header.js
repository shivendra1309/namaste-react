import { LOGO_URL } from "../utils/constants";

const Header = () => (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="nav-bar">
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
          <li>Orders</li>
          <li>My Account</li>
        </ul>
      </div>
    </div>
  );

  export default Header;