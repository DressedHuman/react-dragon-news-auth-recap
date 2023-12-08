import moment from 'moment';
import PropTypes from 'prop-types';
import { HiOutlineBookmark, HiOutlineShare } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { title, author, details, image_url, rating, total_view } = news;

    return (
        <div>
            {/* author part */}
            <div className='flex justify-between items-center px-5 py-4 bg-[#F3F3F3] dark:bg-[#0C0C0C] border border-[#F3F3F3] dark:border-[#0C0C0C] rounded-t-[5px]'>
                <div className='flex justify-start items-center gap-[15px]'>
                    <img src={author.img} className='w-10 h-10 rounded-full' alt={`Author - ${author.name}`} />
                    <div>
                        <p className='text-[#403F3F] dark:text-[#BFC0C0] font-semibold'>{author.name}</p>
                        <p className='text-sm text-[#706F6F] dark:text-[#8F9090]'>{moment(author.published_date).format("YYYY-MM-DD")}</p>
                    </div>
                </div>
                <div className='flex gap-[10px]'>
                    <HiOutlineBookmark />
                    <HiOutlineShare />
                </div>
            </div>
            <div className='px-5 py-4 bg-white dark:bg-black border border-[#E7E7E7] dark:border-[#181818] rounded-b-[5px]'>
                <h2 className="text-xl font-bold text-[green]">{title}</h2>
                <img src={image_url} className='mt-5 mb-8' alt={title} />
                {
                    details.length>157 ?
                        <p>{`${details.slice(0,157)}...`}<br /><Link className='font-semibold text-[orange] dark:text-[#005AFF]'>Read More</Link></p>
                        :
                        <p>{details}</p>
                }
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    news: PropTypes.object,
}

export default NewsCard;