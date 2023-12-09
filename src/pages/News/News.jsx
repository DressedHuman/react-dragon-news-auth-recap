import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import { FaArrowLeftLong } from 'react-icons/fa6';

const News = () => {
    const { id } = useParams();
    const { title, image_url, details, category_id } = useLoaderData().find(aNews => aNews._id == id);

    return (
        <div>
            <Header />
            <Navbar />
            <div className="grid md:grid-cols-4 gap-6">
                <div className="md:col-span-3">
                    <h2 className="text-xl font-semibold text-[#403F3F] dark:text-[#BFC0C0]">Dragon News</h2>

                    <div className="p-7 border border-[#E7E7E7] dark:border-[#181818]">
                        <img src={image_url} alt="" />
                        <h3 className="text-[25px] font-bold text-[#403F3F] dark:text-[#BFC0C0] mt-5">{title}</h3>
                        <p className="text-[#706F6F] dark:text-[#8F9090] mt-2">{details}</p>
                        <div>
                        <Link className="w-2/5 mr-auto mt-8 text-white dark:text-black text-xl font-medium bg-[#D72050] dark:bg-[#28DFAF] px-6 py-2 flex justify-start items-center" to={`/category/${category_id}`}>
                            <FaArrowLeftLong className="mr-[5px]" /> All news in this category
                        </Link>
                        </div>
                    </div>
                </div>
                <RightSideNav />
            </div>
        </div>
    );
};

export default News;