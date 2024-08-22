import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
    const user = useSelector((state) => state?.user?.user);
    const token = localStorage.getItem("token");

    if (!user && !token) {
        return <Navigate to="/login" replace />;
    }

    return children;
};
