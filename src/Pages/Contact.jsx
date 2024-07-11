import { useEffect, useState } from "react";
import mail from "../assets/contact/mail.png";
import call from "../assets/contact/call.png";
import location from "../assets/contact/location.png";
import ContactForm from "../commponents/ContactForm";
import facebook from "../assets/footer/facebook.png";
import twitter from "../assets/footer/twitter.png";
import linkedin from "../assets/footer/linkedin.png";
import logo from "../assets/Logo.png";
import ContactFormModal from "../commponents/ContactFormModal";

const Contact = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };
  const handleModalClose = () => {
    setOpenModal(false);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="main mb-10">
      {openModal ? <ContactFormModal close={handleModalClose} /> : null}
      <section className="hero flex justify-center items-center text-white text-center">
        <div>
          <h1 className="text-5xl font-semibold mb-5">Contact Us</h1>
          <p className="text-lg">
            Get in touch with us today and let us help you with any questions or
            inquiries you may have.
          </p>
        </div>
      </section>

      <section className="border-b border-b-gray-800 p-5 lg:p-14 ">
        <div className="flex flex-col lg:flex-row justify-center gap-5">
          <div className="flex gap-3 bg-gray-800 p-3 rounded-md justify-center items-center">
            <img src={mail} alt="" />
            <p className="text-white">2022devify@gmail.com</p>
          </div>
          <div className="flex gap-3 bg-gray-800 p-3 rounded-md justify-center items-center">
            <img src={call} alt="" />
            <p className="text-white">+918777468277</p>
          </div>
          <div className="flex gap-3 bg-gray-800 p-3 rounded-md justify-center items-center">
            <img src={location} alt="" />
            <p className="text-white">Kolkata</p>
          </div>
        </div>
      </section>

      <ContactForm />

      <section className="border border-gray-800 p-10 lg:p-0 my-20">
        <div className="flex flex-col lg:flex-row justify-between lg:w-[50%] mx-auto lg:gap-5">
          <div className="flex gap-3 justify-center items-center text-white lg:p-8 text-sm lg:text-base">
            <p>Operating Days</p>
            <p className="bg-gray-800 p-2 rounded-md">Monday to Friday</p>
          </div>

          <div className="border border-gray-800 hidden lg:block"></div>

          <div className="flex flex-col lg:flex-row text-white gap-2 items-center justify-center lg:p-8 mt-10 lg:mt-0">
            <h1>Stay Connected</h1>
            <div className="flex gap-2">
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
        </div>
      </section>

      <section className="last w-[100%] mx-auto p-14 border border-gray-800">
        <div className="flex flex-col lg:flex-row gap-5">
          <img src={logo} className="h-20 w-20 mx-auto" alt="" />
          <div className="text-gray-400 text-center lg:text-start">
            <h1 className="text-2xl mb-2">
              Today, Devify Continues to Thrive as a Leading Digital Product
              Agency.....
            </h1>
            <p>
              Combining the power of design, engineering, and project management
              to create transformative digital experiences. They invite you to
              join them on their journey and discover how they can help bring
              your digital ideas to life.
            </p>
          </div>
        </div>
        {/* <div className="mt-10 flex flex-col lg:flex-row justify-center items-center gap-8 p-5 border border-gray-800">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
            <h1 className="text-gray-400">Welcome to Devify</h1>
            <p className="text-sm text-white bg-[#262626] p-5 lg:p-2 text-center lg:text-start">
              Where collaboration, Expertise, and Client-Centricity Intersect to
              Shape the Future of Digital Innovation.
            </p>
          </div>
          <button
            onClick={handleModalOpen}
            className="rounded-md p-2 text-black bg-[#9EFF00] text-sm font-semibold w-full lg:w-28"
          >
            Start Project
          </button>
        </div> */}
      </section>
    </main>
  );
};

export default Contact;
