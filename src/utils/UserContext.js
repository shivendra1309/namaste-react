import { createContext } from "react";

const UserContext = createContext({
    loggedInUser : "shiv is here!"
});

export default UserContext;