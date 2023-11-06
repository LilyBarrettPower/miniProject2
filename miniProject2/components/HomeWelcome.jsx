import { useUserContext } from "../context/UserContext"
import { useNavigate } from "react-router-dom";

function HomeWelcome() {

    const { currentUser, logOut } = useUserContext();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut();
        navigate('/login');
        // navigate to the login page when the outout button is pressed 
    }

    return (
        <>
            <div>
                <span className="profile">
                    <img src={currentUser.profilePhoto} alt="Users profile photo" />
                    {/* Add the profile picture for each user  */}
                </span>
                    <h1>Welcome {currentUser.email} </h1>
                    <button onClick={handleLogOut}>Log out</button>
                </div>
        </>
    )
}

export default HomeWelcome;