import HomeWelcome from "../components/HomeWelcome";
import PopularJobs from "../components/PopularJobs";
import Search from "../components/Search";

function HomePage() {

    return (
        <>
            <HomeWelcome></HomeWelcome>
            <Search></Search>
            <PopularJobs></PopularJobs>
        </>
    )
}

export default HomePage;