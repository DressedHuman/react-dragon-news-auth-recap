import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
    const allNews = useLoaderData();
    console.log(allNews);

    return (
        <div>
            <Header/>
            <BreakingNews/>
            <Navbar/>
            <div className="grid md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav/>
                </div>
                <div className="md:col-span-2 space-y-7">
                    {
                        allNews.map(aNews => <NewsCard key={aNews._id} news={aNews}/>)
                    }
                </div>
                <div>
                    <RightSideNav/>
                </div>
            </div>
        </div>
    );
};

export default Home;