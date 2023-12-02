import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const BreakingNews = () => {
    return (
        <div className='flex gap-3 justify-center items-center border border-primary rounded-xl'>
            <button className="btn btn-primary">Breaking News</button>
            <p className='pr-3'>
                <Marquee pauseOnHover speed={57} direction='left'>
                    <Link to={'/'}>This is home</Link>
                    This is the marquee effect. As marquee tag is deprecated in html5, so this effect is being displayed using the react-fast-marquee React component.</Marquee>
            </p>
        </div>
    );
};

export default BreakingNews;