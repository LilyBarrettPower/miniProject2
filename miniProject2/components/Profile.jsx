import { useUserContext } from "../context/UserContext";
import '../styling/profile.css';

function Profile() {
    const { currentUser } = useUserContext();
    // use the context 
    return (
        <>
            <div className="profileContainer">
                <p>Bio: <br />{currentUser.bio}</p>
                {/* access the context  */}
            </div>
        </>
    )
}

export default Profile;