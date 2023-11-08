import { useLoginInput } from "../hooks/useLoginInput"
// import the custom hook for the login form 
import { useState, useEffect } from "react";
// import useEffect from React to fetch the users data from my JSON file
import { useUserContext } from "../context/UserContext";
// import useNavigate
import { useNavigate } from 'react-router-dom';
// Import bootstrap components:
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

function Login() {
    const navigate = useNavigate();
    // Use the useNavigate hook from React

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
    // create a useEffect to fetch the users data when the component mounts from the internal JSON file


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
            // When the login is successful, reset the email and password, call the handleUpdateUser from the context and navigate the user to the home page
        } else {
            setStatus('Login failed. Please check credentials.')
            // if login unsucessful, display an error message
        }
    }

    return (
        <Container className="d-flex justify-content-center align-items-center mt-3">
            {/*bootstrap classes for styling */}
            <Form>
                {/* using the bootstrap form component for the login form */}
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
                    {/* set an alert as the ststus of the login  */}
                    {status}
                </Alert>}
            </Form>
        </Container>
    );
}

export default Login;