import '../styling/welcome.css';

function Welcome() {

    return (
        <>
            <h1 className="welcomeMessage text-center">Welcome to Job Search Pro!</h1>
            {/* bootstrap className text-center to center the text */}
            <div>
                <img src="../src/assets/welcomeBackground.jpg" alt="background image" className="welcomeBackground"></img>
            </div>
        </>
    )
}

export default Welcome;