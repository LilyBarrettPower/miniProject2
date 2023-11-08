import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import '../styling/homeWelcome.css';

import MyNavBar from "./MyNavBar";

function HomeWelcome() {

    const { currentUser, logOut } = useUserContext();
    const navigate = useNavigate();

    console.log(currentUser);

    const handleLogOut = () => {
        logOut();
        navigate('/login');
        // navigate to the login page when the outout button is pressed 
    }


    return (
        <>
            <div className="welcomeContainer">
                <div className="stickyBanner">
                    <h1 className="welcomeBanner body">Welcome {currentUser.email} </h1>
                </div>
                <div className="welcomeContent">
                    <MyNavBar></MyNavBar>
                    <span className="profile">
                        <Image src={currentUser.profilePhoto} alt="Users profile photo" className="profilePhoto" />
                        {/* Add the profile picture for each user  */}
                    </span>
                    <span>
                        <Button variant="secondary" onClick={handleLogOut} className="logOut body">Log out</Button>
                    </span>
                </div>
            </div>
        </>
    )
}

export default HomeWelcome;