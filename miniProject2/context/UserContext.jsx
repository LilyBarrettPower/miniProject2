import { createContext, useContext, useState } from "react";

// 1. Create the context
const UserContext = createContext();
// Custom provider component for this context.
// Use it in App.jsx like <UserProvider>...</UserProvider>
export const UserProvider = (props) => {
    // store the current user in state at the top level
    const [currentUser, setCurrentUser] = useState({
        email: "",
        profilePhoto: "",
    });
    // sets user object in state, shared via context
    const handleUpdateUser = (user) => {
        setCurrentUser(user);
    };
    // 2. Provide the context.

    const logOut = () => {
        setCurrentUser({
            email: "",
            profilePhoto: "",
        });
    };
    // log the user out by clearing the current user

    return (
        <UserContext.Provider value={{ currentUser, handleUpdateUser, logOut }}>
            {props.children}
        </UserContext.Provider>
    );
}
// 3. Use the context. This custom hook allows easy access
// of this particular context from any child component
export const useUserContext = () => {
    return useContext(UserContext);
}
// Save as UserContext.jsx in a separate 'context' folder