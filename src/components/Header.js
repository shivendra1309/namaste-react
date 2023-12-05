import {  useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";



const Header = () => {
  const [btnName, setBtnName] = useState("Login");
   const onlineStatus = useOnlineStatus();
   const {loggedInUser} = useContext(UserContext);
   console.log("userlogged ", loggedInUser);

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
    <div className="flex justify-between bg-gray-200 shadow-lg">
      <div className="m-5">
        <img className="w-20" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex  p-8 m-4">
          <li className="px-4">Online Status: {onlineStatus===true?"✅":"❌"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to = "/contact">Contact Us</Link></li>
          <li className="px-4">Cart</li>
          <li className="px-4">Orders</li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4">My Account</li>
          <button className="px-4" onClick={()=>handleLogin()}>{btnName}</button>
        <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
