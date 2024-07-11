import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import btnLogo from "../assets/works/btnLogo.png";
import logo from "../assets/Logo.png";
import img1 from "../assets/watch.png";
import img2 from "../assets/travel.png";
import img3 from "../assets/crm.png";
import img4 from "../assets/ponka.png";
import img5 from "../assets/dashboard.png";
import img6 from "../assets/works/img6.png";
import img7 from "../assets/works/img7.png";
import img8 from "../assets/works/img8.png";
import ContactFormModal from "../commponents/ContactFormModal";

const Works = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };
  const handleModalClose = () => {
    setOpenModal(false);
  };
  const works = [
    {
      title: "Business portfolio",
      name: "Watch Your Thoughts",
      link: "https://www.watchyourthoughts.in/",
      img: img1,
      desc: "Watch Your Thoughts is an online counselling platform. We provide counselling and emotional support that promotes mental wellbeing. It allows you to discuss issues related to your personal, professional and academic life.",
    },
    {
      title: "Web App for Travel Agency",
      name: "IndiaXplorer",
      link: "https://luxury-kringle-fdbe89.netlify.app",
      img: img2,
      desc: "At IndiaXplorer, we believe that travel is not just about visiting new places; it's about experiencing new cultures, meeting new people, and creating memories that last a lifetime.",
    },
    {
      title: "CRM Web Application",
      name: "OM EPC Solution",
      link: "https://om-epc-crm.netlify.app/",
      img: img3,
      desc: "At OM EPC Solution CRM, we understand the unique challenges faced by service-based companies, especially those dealing with essential products like laptops and inverters. Our mission is to revolutionize your service management processes.",
    },
    {
      title: "NGO Website",
      name: "Ponka",
      link: "https://www.ponka.org/",
      img: img4,
      desc: "Ponka was founded in a village in the middle of a jungle in Sierra Leone in 2018 with the aim to increase the employment of the people in the village and help better the living standards of the people of one of the poorest communities in the world.",
    },
    {
      title: "Web Portal for Managing Home Smart Appliance ",
      name: "Smart Home",
      img: img5,
      desc: "At SmartHome, we are dedicated to transforming the way you interact with your home appliances. Our innovative application brings the convenience and control of modern technology right to your fingertips, allowing you to manage all your home devices seamlessly through our user-friendly website.",
    },
    {
      title: "Mobile App for Fitness Tracking Design",
      name: "FitTrack",
      img: img6,
      desc: "At FitTrack, we are dedicated to revolutionizing the fitness industry with innovative, user-friendly software designed specifically for gyms and fitness centers.",
    },
  ];

  return (
    <main className="main">
      {openModal ? <ContactFormModal close={handleModalClose} /> : null}
      <section className="hero flex justify-center items-center text-white text-center">
        <div>
          <h1 className="text-4xl lg:text-5xl font-semibold mb-5">Our Works</h1>
          <p className="text-sm lg:text-lg">
            Discover a portfolio of visually stunning and strategically crafted
            digital projects that showcase our creativity and expertise.
          </p>
        </div>
      </section>

      <section className="design p-5 lg:p-14 border-b border-b-gray-800">
        <h1 className="text-white text-4xl font-semibold">At Devify</h1>
        <p className="text-white my-5">
          We have had the privilege of working with a diverse range of clients
          and delivering exceptional digital products that drive success.
        </p>

        <div className="text-white bg-gray-800 p-2 w-[70%] lg:w-[24%]">
          <p className="text-sm flex justify-center">
            Here are ten examples of our notable works:
          </p>
        </div>
      </section>

      <section className="story p-5 lg:p-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-14">
          {works.map((work, index) => (
            <div key={index} className="border border-gray-800">
              <div className="mb-2 border border-gray-800 p-5">
                <h2 className="text-xl text-gray-500 font-semibold">
                  {work.title}
                </h2>
              </div>
              <div className="mt-5 p-10 text-gray-400">
                <img src={work.img} alt="" className="w-full h-auto" />
                <div className="flex justify-between items-center my-10">
                  <div>
                    <h2 className="text-lg font-semibold mb-2">{work.name}</h2>
                    {work.link && (
                      <a
                        target="_blank"
                        href={work.link}
                        className="text-sm bg-[#1e221e] p-1 rounded-lg"
                      >
                        {work.link}
                      </a>
                    )}
                  </div>
                  {work.link && (
                    <a target="_blank" href={work.link}>
                      <img src={btnLogo} className="w-10 h-10" alt="" />
                    </a>
                  )}
                </div>
                <p>{work.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="p-10 text-center text-white bg-[#1e221e] border border-gray-800">
          <img src={logo} className="h-20 w-20 mx-auto" alt="" />
          <div className="w-full lg:w-[55%] mx-auto">
            <h1 className="text-2xl mt-5">
              Let us Bring your Ideas to Life in the Digital World.
            </h1>
            <p className="text-sm mt-2">
              No matter which services you choose, we are committed to
              delivering exceptional results that exceed your expectations. Our
              multidisciplinary team works closely together to ensure seamless
              collaboration and a unified vision for your digital product.
            </p>
            <Link to="/contact">
          <button 
          className="rounded-sm p-2 text-black bg-[#9EFF00] mx-auto text-sm font-semibold w-full lg:w-28 mt-5">
            Start Project
          </button>
          </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Works;
