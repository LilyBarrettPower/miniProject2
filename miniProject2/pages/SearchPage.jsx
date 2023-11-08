
import Search from "../components/Search";
import HomeWelcome from "../components/HomeWelcome";
import { useUserContext } from "../context/UserContext";
import Footer from "../components/Footer";

function SearchPage() {
    return (
        <>
            <HomeWelcome></HomeWelcome>
            <Search></Search>
            <Footer></Footer>
        </>
    )
}

export default SearchPage;