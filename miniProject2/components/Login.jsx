import { useLoginInput } from "../hooks/useLoginInput"
// import the custom hook for the login form 
import { useState, useEffect } from "react";
// import useEffect from React to fetch the users data from my JSON file
import { useUserContext } from "../context/UserContext";

import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const { handleUpdateUser } = useUserContext();
    // access the handleUpdateUser function from the context
    const [status, setStatus] = useState('');
    const [usersData, setUsersData] = useState([]);
    // create a useState for the users data

    const [emailInputProps, resetEmail] = useLoginInput('Example@gmail.com');
    // implement the custom hook for name
    const [passwordInputProps, resetPassword] = useLoginInput('*******');
    // implement the custom hook for email

    useEffect(() => {
        fetch('./database/users.json')
            .then(response => response.json())
            .then(data => setUsersData(data))
            .catch(error => console.error("Error fetching the users data:", error));
    }, []);
    // create a useEffect to fetch the users data when the component mounts


    function handleLogin() {
        const enteredEmail = emailInputProps.value;
        const enteredPassword = passwordInputProps.value;
        // store the entered values in variables

        const user = usersData.find(user => user.email === enteredEmail && user.password === enteredPassword);
        // check the entered values against the json file with user data

        if (user) {
            resetEmail();
            resetPassword();
            setStatus('success!');
            handleUpdateUser(user);
            navigate('/home');
        } else {
            setStatus('Login failed. Please check credentials.')
        }
    }
    // a function to reset the input values and display either a success message or a login failed message

    return (
        <>
            <label>Email:
                <input {...emailInputProps} />
                {/* apply the properties from the nameInputProps object into the input field */}
            </label>
            <label>Password:
                <input type="password" {...passwordInputProps} />
            </label>
            <button onClick={handleLogin}>Login!</button>
            {/* create a button that when clicked, calls the handleLogin function to reset the input fields */}
            <div>{status}</div>
        </>
    );
}

export default Login;