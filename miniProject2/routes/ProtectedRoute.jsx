import { Navigate, Outlet } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

function ProtectedRoute() {
    const { currentUser } = useUserContext();

    if (!currentUser.email) {
        return <Navigate to="/login"/>
    } 
    return <Outlet/>
}

export default ProtectedRoute;