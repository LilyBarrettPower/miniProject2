import { createContext, useContext, useState } from "react";

// Create the context
const UserContext = createContext();

// define user provider which takes props
export const UserProvider = (props) => {

    // initialise currentUser in state with an email and profilephoto objects
    const [currentUser, setCurrentUser] = useState({
        email: "",
        profilePhoto: "",
    });

    // update the current user state with the new user state 
    const handleUpdateUser = (user) => {
        setCurrentUser(user);
    };

    // log the user out by clearing any user data
    const logOut = () => {
        setCurrentUser({
            email: "",
            profilePhoto: "",
        });
    };


    return (
        <UserContext.Provider value={{ currentUser, handleUpdateUser, logOut }}>
            {props.children}
        </UserContext.Provider>
    );
}
// Use the context. This custom hook allows easy access of this particular context from any child component
export const useUserContext = () => {
    return useContext(UserContext);
}
