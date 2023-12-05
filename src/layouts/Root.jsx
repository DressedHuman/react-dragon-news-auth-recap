import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto font-poppins mb-7">
            <Outlet/>
        </div>
    );
};

export default Root;