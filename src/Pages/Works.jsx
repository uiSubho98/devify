import btnLogo from "../assets/works/btnLogo.png";
import logo from "../assets/Logo.png";
import img1 from "../assets/works/img1.png";
import img2 from "../assets/works/img2.png";
import img3 from "../assets/works/img3.png";
import img4 from "../assets/works/img4.png";
import img5 from "../assets/works/img5.png";
import img6 from "../assets/works/img6.png";
import img7 from "../assets/works/img7.png";
import img8 from "../assets/works/img8.png";

const Works = () => {
  const works = [
    {
      title: "E-Commerce Platform for Fashion Hub",
      name: "Chic Boutique",
      link: "https://www.chicboutique.com",
      img: img1,
      desc: "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.",
    },
    {
      title: "Mobile App for Food Delivery Service",
      name: "HungryBites",
      link: "https://www.hungrybites.com",
      img: img2,
      desc: "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.",
    },
    {
      title: "Booking and Reservation System for Event Management",
      name: "EventMasters",
      link: "https://www.eventmasters.com",
      img: img3,
      desc: "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.",
    },
    {
      title: "ProTech Solutions",
      name: "ProTech",
      link: "https://www.protechsolutions.com",
      img: img4,
      desc: "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.",
    },
    {
      title: "Web Portal for Real Estate Listings",
      name: "Real Estate Hub",
      link: "https://www.realestatehub.com",
      img: img5,
      desc: "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.",
    },
    {
      title: "Mobile App for Fitness Tracking",
      name: "FitTrack",
      link: "https://www.fittrack.com",
      img: img6,
      desc: "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.",
    },
    {
      title: "Custom Software for Supply Chain Management",
      name: "SupplyChainPro",
      link: "https://www.supplychainpro.com",
      img: img7,
      desc: "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.",
    },
    {
      title: "Educational Platform for Online Learning",
      name: "EduLearn",
      link: "https://www.edulearn.com",
      img: img8,
      desc: "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy.",
    },
  ];

  return (
    <main className="main">
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
                    <a
                      href={work.link}
                      className="text-sm bg-[#1e221e] p-1 rounded-lg"
                    >
                      {work.link}
                    </a>
                  </div>
                  <img src={btnLogo} className="w-10 h-10" alt="" />
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
            No matter which services you choose, we are committed to delivering
            exceptional results that exceed your expectations. Our
            multidisciplinary team works closely together to ensure seamless
            collaboration and a unified vision for your digital product.
          </p>
          <button className="rounded-sm p-2 mt-10 text-black bg-[#9EFF00] text-sm font-semibold w-full lg:w-28 mx-auto">
            Start Project
          </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Works;
