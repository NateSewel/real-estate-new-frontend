import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo w-90 h-90">
      {/* Logo */}
      <Link to="/">
        <img src="../../../public/LogoNew.png" alt="logo" width={180} />
      </Link>
    </div>
  );
};

export default Logo;
