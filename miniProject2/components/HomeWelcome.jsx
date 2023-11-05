import { useUserContext } from "../context/UserContext"

function HomeWelcome() {

    const { currentUser } = useUserContext();

    return (
        <>
            <h1>Welcome {currentUser.email} </h1>
        </>
    )
}

export default HomeWelcome;