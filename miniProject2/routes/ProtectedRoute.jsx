import { Navigate, Outlet } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

function ProtectedRoute() {
    const { currentUser } = useUserContext();

    if (!currentUser.email) {
        return <Navigate to="/login" />
        // if there is no user logged in and they try to access the profile page theyre redirected to the login page
    } 
    return <Outlet/>
}

export default ProtectedRoute;