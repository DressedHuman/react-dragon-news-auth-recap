import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div className='px-2'>
            {/* social login section */}
            <div className='space-y-4'>
                <h2 className="text-3xl">Login With</h2>
                <div className='space-y-2'>
                    <button className="btn border-[#4285F4] w-full px-[12.5%] text-lg text-[#4285F4]">
                        <FaGoogle />
                        Login with Google
                    </button>
                    <button className="btn border-[#4285F4] w-full px-[12.5%] text-lg">
                        <FaGithub />
                        Login with Github
                    </button>
                </div>
            </div>
            {/* find us on section */}
            <div className='mt-7 space-y-5 mb-5'>
                <h2 className="text-3xl">Find Us On</h2>
                <div className='grid grid-cols-1 border-2 rounded-lg'>
                    <div className='flex justify-start items-center gap-[10px] text-lg py-[17px] pl-4'>
                        <FaFacebook className='text-[#316FF6]' />
                        <a href="https://facebook.com/dressed.human">Facebook</a>
                    </div>
                    <hr style={{width: "calc(100% - 12px)", margin: "0 auto"}} />
                    <div className='flex justify-start items-center gap-[10px] text-lg py-[17px] pl-4'>
                        <FaTwitter className='text-[#1DA1F2]' />
                        <a href="https://x.com/dressed_human">Twitter</a>
                    </div>
                    <hr style={{width: "calc(100% - 12px)", margin: "0 auto"}} />
                    <div className='flex justify-start items-center gap-[10px] text-lg py-[17px] pl-4'>
                        <FaInstagram className='text-[red]' />
                        <a href="https://instagram.com/dressed.human">Instagram</a>
                    </div>
                </div>
            </div>
            {/* q-zone section */}
            <div className='p-[15px] space-y-5'>
                <h2 className="text-3xl">Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;