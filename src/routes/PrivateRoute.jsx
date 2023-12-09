import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import Header from "../pages/shared/Header/Header";
import Navbar from "../pages/shared/Navbar/Navbar";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div>
            <Header />
            <Navbar />
            <div className="text-center my-12">
                <span className="loading loading-dots loading-lg"></span>
            </div>
        </div>
    }

    else if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'} />;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;