import { useUserContext } from "../context/UserContext";
import '../styling/profile.css';

function Profile() {
    const { currentUser } = useUserContext();
    return (
        <>
            <div className="profileContainer">
                <p>Bio: <br />{currentUser.bio}</p>
            </div>
        </>
    )
}

export default Profile;