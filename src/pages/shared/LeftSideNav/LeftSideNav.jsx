import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2 className="text-xl text-[#403F3F] dark:text-[#BFC0C0] font-semibold mb-5">All Category</h2>
            <div className="space-y-[13px]">
                {
                    categories.map(category => <Link to={`/category/${category.id}`} className="block w-full pl-[50px] py-[17px] bg-[#E7E7E7] dark:bg-[#181818] rounded-[5px] font-semibold text-lg text-left" key={category.id}>{category.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;