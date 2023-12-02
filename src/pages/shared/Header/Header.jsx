import moment from "moment";
import logo from '../../../assets/logo.png';

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-7">
            <img src={logo} alt='Header Logo' />
            <p>Journalism Without Fear or Favour</p>
            <p className="text-xl">{moment().format("dddd, MMMM DD, yyyy")}</p>
        </div>
    );
};

export default Header;