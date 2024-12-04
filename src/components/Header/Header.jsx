import "./Header.css";
import { BiMenuAltRight } from "../../../node_modules/react-icons/bi";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
import useHeaderColor from "../../hooks/useHeaderColor";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import AddPropertyModal from "../AddPropertyModal/AddPropertyModal";
import useAuthCheck from "../../hooks/useAuthCheck";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const headerColor = useHeaderColor();
  const [modalOpened, setModalOpened] = useState(false);
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const { validateLogin } = useAuthCheck();
  const handleAddPropertyClick = () => {
    if (validateLogin()) {
      setModalOpened(true);
    }
  };

  // Function for Mobile Menu collapse
  const getMenuStyles = (toggleMenu) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !toggleMenu && "-100%" };
    }
  };

  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter paddings innerWidth h-container">
        {/* Logo */}
        <Link to="/">
          <img src="./LogoNew.png" alt="logo" width={180} />
        </Link>

        {/* Collapse Mobile Menu */}
        <OutsideClickHandler onOutsideClick={() => setToggleMenu(false)}>
          <div className="flexCenter h-menu" style={getMenuStyles(toggleMenu)}>
            <NavLink to="/properties">Properties</NavLink>

            <a href="mailto:pinpointproperty050@gmail.com">Contact Us</a>

            {/* Add property */}
            <div onClick={handleAddPropertyClick}>Add Property</div>
            <AddPropertyModal opened={modalOpened} setOpened={setModalOpened} />

            {/* Login Button */}
            {!isAuthenticated ? (
              <button className="button" onClick={loginWithRedirect}>
                Login
              </button>
            ) : (
              <ProfileMenu user={user} logout={logout} />
            )}
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setToggleMenu((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
