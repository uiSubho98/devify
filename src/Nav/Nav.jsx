import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/service" },
    { name: "Works", link: "/works" },
    { name: "Process", link: "/process" },
    { name: "About", link: "/about" },
  ];

  const location = useLocation();

  console.log(location.pathname)

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full top-0 h-20">
      <div className="md:flex items-center justify-between bg-[#1e221e] h-full px-7 md:px-16">
        <NavLink to="/">
          <div
            className="font-bold h-full text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800"
          >
            <img src={Logo} alt="Logo" className="w-10 h-10 mr-2" />
            <span className="text-white">Devify</span>
          </div>
        </NavLink>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <FontAwesomeIcon
            className="text-lime-100"
            icon={open ? faTimes : faBars}
          />
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 bg-gray-800" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 md:my-0 my-7">
              <NavLink
                to={link.link}
                className={`duration-500 text-white ${
                  location.pathname === link.link
                    ? "text-g"
                    : "hover:text-green-500"
                }`}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li className="md:ml-8 ml-0 md:my-0 my-7">
            <Link to="/contact" className="rounded-md p-2 text-black bg-[#9EFF00] text-sm font-semibold w-28 mx-auto">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
