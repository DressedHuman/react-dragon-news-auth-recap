import { Link } from "react-router-dom";
import BreakingNews from "../pages/Home/BreakingNews";
import Header from "../pages/shared/Header/Header";

const ErrorPage = () => {
    return (
        <div className="max-w-6xl mx-auto font-poppins text-center space-y-7">
            <div>
                <Header />
                <BreakingNews />
            </div>
            <h2 className="text-5xl font-semibold text-red-800">The requested page doesn&apos;t exist!</h2>
            <Link to={'/'} className="btn btn-primary text-white text-xl font-semibold">Go Home</Link>
        </div>
    );
};

export default ErrorPage;