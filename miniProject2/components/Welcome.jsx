import Image from 'react-bootstrap/Image'
import '../styling/welcome.css';


function Welcome() {

    return (
        <>
            <div className="welcome">
                <div className="banner">
                    <h1 className="welcomeMessage">Welcome to Job Search Pro!</h1>
                    <Image src="../src/assets/welcomeBackground.jpg" alt="background image" className="welcomeBackground"/>
                </div>
            </div>
        </>
    )
}

export default Welcome;