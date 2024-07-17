import { Link } from "react-router-dom";

import facebook from "../assets/footer/facebook.png";
// import twitter from "../assets/footer/twitter.png";
import linkedin from "../assets/footer/linkedin.png";
import logo from "../assets/Logo.png";
import { IoMail } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-[100%] h-[100%] bg-[#1E1E1E] flex flex-col px-4 lg:px-20 gap-6 py-4">
      <div className="flex flex-col lg:flex-row items-center gap- justify-between">
        <div className="flex flex-row gap-2 items-center">
          <a href="#">
            <img src={logo} alt="Logo" className="w-12" />
          </a>
          <h1 className="text-white font-semibold text-2xl">Devify</h1>
        </div>
        <div className="flex my-5 md:my-5 lg:my-0">
          <ul className="flex flex-row gap-4 text-white flex-wrap items-center justify-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/service">Services</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/process">Process</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row text-white gap-2 items-center justify-center">
          <h1>Stay Connected</h1>
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=61562554432235&mibextid=ZbWKwL"
          >
            <img src={facebook} alt="facebook" className="w-12" />
          </a>
          <a
            href="https://www.linkedin.com/company/devify2022/"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin" className="w-12" />
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between py-4">
        <div className="flex flex-col md:flex-row gap-4 text-sm">
          <div className="flex items-center justify-center gap-2">
            <p className="text-[#9EFF00] text-xl">
              <IoMail />
            </p>
            <p className="text-white">2022devify@gmail.com</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <p className="text-[#9EFF00] text-xl">
              <BsFillTelephoneFill />
            </p>
            <p className="text-white">+918777468277</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <p className="text-[#9EFF00] text-xl">
              <FaLocationDot />
            </p>
            <p className="text-white">Kolkata</p>
          </div>
        </div>

        <div className="flex justify-center">
          <p className="text-[#98989A] text-sm">
            © 2022 Devify. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
