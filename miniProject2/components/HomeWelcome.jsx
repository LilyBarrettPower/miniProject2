import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import '../styling/homeWelcome.css';

import MyNavBar from "./MyNavBar";

function HomeWelcome() {

    const { currentUser, logOut } = useUserContext();
    // use the context 
    const navigate = useNavigate();
    // initialise navigate for the logout button

    console.log(currentUser);

    const handleLogOut = () => {
        logOut();
        navigate('/login');
        // navigate to the login page when the logout button is pressed 
    }


    return (
        <>
            <div className="welcomeContainer">
                <div className="stickyBanner">
                    <h1 className="welcomeBanner body">Welcome {currentUser.email} </h1>
                    {/* access the currentUser from the context */}
                </div>
                <div className="welcomeContent">
                    <MyNavBar></MyNavBar>
                    {/* import the MyNavBar component */}
                    <span className="profile">
                        <Image src={currentUser.profilePhoto} alt="Users profile photo" className="profilePhoto" />
                        {/* Add the profile picture for each user  */}
                    </span>
                    <span>
                        <Button variant="secondary" onClick={handleLogOut} className="logOut body">Log out</Button>
                        {/* call the handleLogOut function when the logout button is clicked */}
                    </span>
                </div>
            </div>
        </>
    )
}

export default HomeWelcome;