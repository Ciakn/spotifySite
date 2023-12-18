import { links } from "../assets/constants";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { logo } from "../assets";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";
const NavLinks = ({ handleClick }) => (
  <div className="mt-10 ">
    {links.map((link) => {
      return (
        <NavLink
          onClick={() => handleClick && handleClick()}
          key={link.name}
          className="flex flex-row justify-start my-8 items-center text-small font-medium text-gray-400 hover:text-cyan-600 no-active"
          to={link.to}>
          <link.icon className="w-6 h-6 mr-2" />
          {link.name}
        </NavLink>
      );
    })}
  </div>
);
const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="md:flex hidden   flex-col w-[200px] py-10 px-4     bg-[#191624]">
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks />
      </div>
      <div className="absolute md:hidden block top-2 right-0">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="text-white  mr-2 w-6 h-6"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="text-white mr-2 w-6 h-6"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>
      <div
        className={`absolute top-0 h-screen w-2/3  bg-gradiant-to-tl from-white/10 to-[#483d8b]
        p-6 backdrop-blur-lg z-10 smooth-transition ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}>
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks onClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
