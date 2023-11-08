import HomeWelcome from "../components/HomeWelcome";
import { useUserContext } from "../context/UserContext";
import Footer from "../components/Footer";

function ProfilePage() {
    const { currentUser } = useUserContext();

    return (
        <>
            <HomeWelcome></HomeWelcome>
            <p>Bio: <br />{currentUser.bio}</p>
            <Footer></Footer>
        </>
    );
}

export default ProfilePage;