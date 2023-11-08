import { useLoginInput } from "../hooks/useLoginInput"
// import the custom hook for the login form 
import { useState, useEffect } from "react";
// import useEffect from React to fetch the users data from my JSON file
import { useUserContext } from "../context/UserContext";

import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

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
        <Container className="d-flex justify-content-center align-items-center mt-3">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="headings">Email:</Form.Label>
                    <Form.Control type="email" value={emailInputProps.value} onChange={emailInputProps.onChange}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="headings">Password:</Form.Label>
                    <Form.Control type="password" value={passwordInputProps.value} onChange={passwordInputProps.onChange} />
                </Form.Group>
                <Button variant="secondary" onClick={handleLogin} className="my-3 body">Login!</Button>
                {status && <Alert variant={status === 'success!' ? 'success' : 'danger'} className="mt-3">
                    {status}
                </Alert>}
            </Form>
        </Container>
    );
}

export default Login;