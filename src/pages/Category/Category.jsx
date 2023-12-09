import { useLoaderData, useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import NewsCard from "../Home/NewsCard";
import RightSideNav from "../shared/RightSideNav/RightSideNav";

const Category = () => {
    const { id } = useParams();
    const news = useLoaderData().filter(aNews => aNews.category_id === id);

    return (
        <div>
            <Header />
            <Navbar />
            <h2 className="text-center text-2xl mb-7 border-b pb-3">News in this category</h2>
            <div className="grid md:grid-cols-4 gap-6">
                <div className="md:col-span-3">
                    {
                        news.length ? news.map(aNews => <NewsCard key={aNews._id} news={aNews} />) :
                        <h2 className="text-2xl text-red-700 font-semibold text-center my-12">No news in this category!</h2>
                    }
                </div>
                <RightSideNav />
            </div>
        </div>
    );
};

export default Category;