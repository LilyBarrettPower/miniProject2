import LoginPage from "../pages/LoginPage"
import { UserProvider } from "../context/UserContext"
import Routes from "../routes/AppRoutes"

function App() {


  return (
    <>
      <UserProvider>
        {/* <LoginPage></LoginPage> */}
        <Routes></Routes>
      </UserProvider>
    </>
  )
}

export default App
