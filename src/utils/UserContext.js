import { createContext } from "react";

// its kinda a central global object
// we will give it some information which it will hold 
const UserContext = createContext(
    {
        loggedUser : "Default User",
    }
);

export default UserContext;