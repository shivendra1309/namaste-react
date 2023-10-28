import {  useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";



const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const handleLogin = () => {
    if(btnName === "Login"){
      setBtnName("Logout");
    }else{
      setBtnName("Login");
    }
  }

  //  useEffect(() => {
     
  //   }, []);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-bar">
        <ul className="nav-items">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to = "/contact">Contact Us</Link></li>
          <li>Cart</li>
          <li>Orders</li>
          <li>My Account</li>
          <button className="login-btn" onClick={()=>handleLogin()}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
