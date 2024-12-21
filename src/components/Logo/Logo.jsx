import { Link } from "react-router-dom";
import "./Logo.css";
import LogoImage from "../../../public/LogoNew.png";

const Logo = () => {
  return (
    <div className="paddings logo w-90 h-90">
      {/* Logo */}
      <Link to="/">
        <img src={LogoImage} alt="logo" width={180} />
      </Link>
    </div>
  );
};

export default Logo;
