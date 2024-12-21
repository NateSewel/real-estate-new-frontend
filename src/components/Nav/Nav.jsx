import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuthCheck from "../../hooks/useAuthCheck";
import AddPropertyModal from "../AddPropertyModal/AddPropertyModal";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import "../../pages/Property/Property.css";
import { Menu, X } from "lucide-react";

const NavLinks = () => {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  const [modalOpened, setModalOpened] = useState(false);
  const { validateLogin } = useAuthCheck();
  const handleAddPropertyClick = () => {
    if (validateLogin()) {
      setModalOpened(true);
    }
  };
  return (
    <>
      <NavLink to="/properties">Properties</NavLink>
      <a href="mailto:pinpointproperty050@gmail.com">Contact Us</a>
      {/* Add property */}
      <NavLink onClick={handleAddPropertyClick}>Add Property</NavLink>

      <AddPropertyModal opened={modalOpened} setOpened={setModalOpened} />

      {/* Login Button */}
      {!isAuthenticated ? (
        <button className="button" onClick={loginWithRedirect}>
          Login
        </button>
      ) : (
        <ProfileMenu user={user} logout={logout} />
      )}
    </>
  );
};

const Nav = () => {
  //   Mobile navigation state
  const [isOpen, setIsOpen] = useState(false);
  //   Function to toggle Navbar Menu
  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="w-1/3 flex justify-end">
        <div className="hidden w-full justify-between md:flex">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col items-center basis-full gap-2">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Nav;
