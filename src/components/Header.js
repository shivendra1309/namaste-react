import {  useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Header = () => {
  const [btnName, setBtnName] = useState("Login");
   const onlineStatus = useOnlineStatus();

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
          <li>Online Status: {onlineStatus===true?"✅":"❌"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to = "/contact">Contact Us</Link></li>
          <li>Cart</li>
          <li>Orders</li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>My Account</li>
          <button className="login-btn" onClick={()=>handleLogin()}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
