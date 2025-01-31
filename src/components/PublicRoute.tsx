import {Navigate} from 'react-router-dom';
import Cookies from 'js-cookie';

export const PublicRoute = ({children}: { children: JSX.Element }) => {
    const token = Cookies.get('token');

    if (token) {
        return <Navigate to="/dashboard" replace/>;
    }

    return children;
};