import { UserProvider } from "../context/UserContext"
import Routes from "../routes/AppRoutes"

function App() {


  return (
    <>
      <UserProvider>
        <Routes></Routes>
      </UserProvider>
    </>
  )
}

export default App
