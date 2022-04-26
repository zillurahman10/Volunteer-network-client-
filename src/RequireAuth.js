import { useAuthState } from 'react-firebase-hooks/auth'
import auth from './FIrebase.init';
const { useLocation, Navigate } = require("react-router-dom");

function RequireAuth({ children }) {
    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth