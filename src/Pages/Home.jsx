import heroSection from "../assets/landing/heroSection.png";
import heroSection2 from "../assets/landing/heroSection2.png";
// import textContainer from "../assets/landing/TextContainer.png";
import { Link  } from "react-router-dom";

import Icon1 from "../assets/landing/Icon1.png";
import Icon2 from "../assets/landing/Icon2.png";
import Icon3 from "../assets/landing/Icon3.png";
import Icon4 from "../assets/landing/Icon4.png";
import Icon5 from "../assets/landing/Icon5.png";
import Icon7 from "../assets/landing/Icon7.png";
import Icon6 from "../assets/landing/Icon6.png";
import Profile1 from "../assets/landing/Profile1.png";
import Profile2 from "../assets/landing/Profile2.png";
// import logo from "../assets/Logo.png";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import ContactForm from "../commponents/ContactForm";

const Home = () => {
  const [isAccordingOpen1, setIsAccordingOpen1] = useState(null);
  const [isAccordingOpen2, setIsAccordingOpen2] = useState(null);
  // accordian data
  const accordingData1 = [
    {
      number: "01",
      title: "What services does Devify provide?",
      description:
        "Devify provides a range of IT services including website design, development, SEO (Search Engine Optimization), logo design, maintenance, and brand identity services. Clients can contact Devify for assistance in these areas to enhance their digital presence and branding efforts.",
    },
    {
      number: "02",
      title: "How can Devify help my business?",
      description:
        "Devify can assist your business by providing services such as website design, development, SEO, logo design, maintenance, and brand identity. Their expertise helps in establishing a strong online presence, enhancing brand visibility, and attracting target audiences effectively.",
    },
    {
      number: "03",
      title: "What industries does Devify work with?",
      description: `Devify works with a variety of industries including startups, NGOs (Non-Governmental Organizations), individual portfolios, and enterprises. Their services are tailored to meet the unique needs of each sector, helping clients from diverse backgrounds establish and enhance their online presence effectively.`,
    },

    {
      number: "04",
      title: `How long does it take to complete a project with Devify?.`,
      description: `Devify typically completes projects within a timeframe ranging from 4 weeks to 6 weeks, depending on the scope and complexity of the project. This ensures timely delivery while maintaining high standards of quality and client satisfaction.`,
    },
  ];
  const accordingData2 = [
    {
      number: "05",
      title:
        "Do you offer ongoing support and maintenance after the project is completed?",
      description:
        "Yes, Devify offers ongoing support and maintenance services after the completion of a project. This ensures that your website or digital solution remains up-to-date, secure, and optimized for performance. Ongoing support may include updates, troubleshooting, security enhancements, and technical assistance as needed to ensure your continued satisfaction and success.",
    },
    {
      number: "06",
      title: "Can you work with existing design or development frameworks?",
      description:
        "Yes, Devify can work with existing design or development frameworks. Whether you have a specific framework in mind or an existing project that needs further development, they are equipped to collaborate and integrate seamlessly with various frameworks to meet your project requirements effectively. This flexibility allows for tailored solutions that align with your business objectives and technical preferences.",
    },
    {
      number: "07",
      title: "How involved will I be in the project development process?",
      description: `Your involvement in the project development process with Devify can be as hands-on or as hands-off as you prefer. They typically involve clients in key stages such as initial consultations, requirement gathering, design reviews, and milestone approvals. You can expect regular updates and opportunities for feedback throughout the project lifecycle. This collaborative approach ensures that your vision is realized while maintaining transparency and alignment with your expectations.`,
    },

    {
      number: "08",
      title: `Can you help with website or app maintenance and updates?`,
      description: `Yes, Devify offers maintenance and update services for websites and apps. This includes regular updates to keep your digital assets secure, optimized, and aligned with current technologies and trends. Whether it's fixing bugs, adding new features, or enhancing performance, they provide ongoing support to ensure your digital presence remains effective and reliable over time.`,
    },
  ];

  const handleBorderClick1 = (index) => {
    setIsAccordingOpen1((prevIndex) => (prevIndex === index ? null : index));
    console.log(index);
  };
  const handleBorderClick2 = (index) => {
    setIsAccordingOpen2((prevIndex) => (prevIndex === index ? null : index));
    console.log(index);
  };

  return (
    <div className="w-[100%] h-[100%] bg-[#1E1E1E] flex flex-col">
      <div className="h-full md:h-screen relative">
        <img
          src={heroSection2}
          alt="herosection2"
          className="object-cover w-full h-[90%] relative md:hidden"
        />
        <img
          src={heroSection}
          alt="herosection"
          className="object-cover w-full h-[95%] relative hidden md:block"
        />
        <div className="absolute  inset-0 flex flex-col items-center justify-center gap-8 py-12">
          <div className="flex flex-col text-center gap-2 text-white text-3xl font-semibold md:text-5xl">
            <h1 className="lg:text-8xl md:text-5xl text-4xl">A Digital Product Studio</h1>
            <h1 className="lg:text-6xl md:text-4xl text-3xl">that will Work</h1>
          </div>
          <div className="md:bg-white-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-100 text-white px-6 py-4 text-sm my-6 hidden md:block">
            <p className="text-xl">
              For{" "}
              <span className="px-2 py-1 bg-[#262626] rounded-md mx-1">
                Startups
              </span>{" "}
              ,{" "}
              <span className="px-2 py-1 bg-[#262626] rounded-md mx-1">
                Enterprise
              </span>{" "}
              ,{" "}
              <span className="px-2 py-1 bg-[#262626] rounded-md mx-1">
                Individuals
              </span>{" "}
              and{" "}
              <span className="px-2 py-1 bg-[#262626] rounded-md mx-1">
                Business
              </span>
            </p>
          </div>
          <div className="mx-4 bg-[#262626] md:hidden block text-center rounded-md text-white px-6 py-4 text-sm my-6">
            <p className="text-md">
              For Startups, Enterprise, Individuals and Business
            </p>
          </div>
          <div className="flex gap-2 text-white text-sm">
            <Link to="/works">
              <button className="bg-[#262626] rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-100 text-white px-4 py-2 ">
                Our Works
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-[#9EFF00] rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-100 text-black px-4 py-2 ">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <section className="hero flex justify-center items-center text-white text-center">
          <div className="lg:px-28 md:px-20 px-5">
            <h1 className="text-2xl lg:text-5xl md:text-3xl font-semibold mb-5"> Our Services</h1>
            <p className="text-sm md:text-lg lg:text-lg">
              Transform your brand with our innovative digital solutions that
              captivate and engage your audience.
            </p>
          </div>
        </section>
      </div>

      <div className="flex flex-col md:flex-row w-full h-full justify-center items-center px-0 md:px-28">
        <div className="flex flex-col gap-4 px-6 py-8 flex-1">
          <div className="shadow-md w-12 flex flex-row gap-4 items-center">
            <img src={Icon1} alt="Icon1" className="w-full" />
            <h1 className="font-semibold text-xl text-white md:hidden">
              Design
            </h1>
          </div>
          <div className="text-white flex flex-col gap-4 mb-4">
            <h1 className="font-semibold text-xl hidden md:block">Design</h1>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="text-xl sm:text-sm">
              At Devify, our design team is passionate about creating stunning,
              user-centric designs that captivate your audience and elevate your
              brand. We believe that great design is not just about aesthetics;
              {`it's`} about creating seamless and intuitive user experiences
            </p>
          </div>
         
        </div>
        <div className="flex flex-col gap-4 px-6 py-8 flex-1">
          <div className="shadow-md w-12 flex flex-row gap-4 items-center">
            <img src={Icon2} alt="Icon2" className="w-full" />
            <h1 className="font-semibold text-xl text-white md:hidden ">
              Engineering
            </h1>
          </div>
          <div className="text-white flex flex-col gap-4 mb-4">
            <h1 className="font-semibold text-xl hidden md:block">
              Engineering
            </h1>
            <p className="text-xl sm:text-sm">
              Our engineering team combines technical expertise with a passion
              for innovation to build robust and scalable digital solutions. We
              leverage the latest technologies and best practices to deliver
              high-performance applications tailored to your specific needs.
            </p>
          </div>
          
        </div>
        <div className="flex flex-col gap-4 px-6 py-8 flex-1">
          <div className="shadow-md w-12 flex flex-row gap-4 items-center">
            <img src={Icon3} alt="Icon3" className="w-full" />
            <h1 className="font-semibold text-xl text-white md:hidden nowrap">
              Project Managements
            </h1>
          </div>
          <div className="text-white flex flex-col gap-4 mb-4">
            <h1 className="font-semibold text-xl  hidden md:block">
              Project Management
            </h1>
            <p className="text-xl sm:text-sm">
              Our experienced project management team ensures that your projects
              are delivered on time, within budget, and according to your
              specifications. We follow industry-standard methodologies and
              employ effective communication and collaboration tools to keep you
              informed throughout the development process.
            </p>
          </div>
         
        </div>
      </div>

      <section className="hero flex justify-center items-center text-white text-center">
        <div className="lg:px-28 md:px-20 px-5">
          <h1 className="text-2xl lg:text-5xl md:text-3xl font-semibold mb-5">Why Choose Devify</h1>
          <p className="text-sm md:text-lg lg:text-lg">
            Experience excellence in digital craftsmanship with our team of
            skilled professionals dedicated to delivering exceptional results.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 w-full px-0 md:px-28 items-center">
        <div className="flex flex-col gap-4 px-6 py-8 flex-1">
          <div className="flex flex-row gap-2 items-center">
            <div className="shadow-md w-12 ">
              <img src={Icon4} alt="Icon4" className="w-full" />
            </div>
            <h1 className="font-semibold text-xl text-white">Expertise</h1>
          </div>
          <div className="text-white ">
            <p className="text-sm">
              Our team consists of highly skilled professionals who have a deep
              understanding of the digital landscape. We stay updated with the
              latest industry trends and best practices to deliver cutting-edge
              solutions.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 px-6 py-8 flex-1">
          <div className="flex flex-row gap-2 items-center">
            <div className="shadow-md w-12 ">
              <img src={Icon5} alt="Icon5" className="w-full" />
            </div>
            <h1 className="font-semibold text-xl text-white">
              Client-Centric Approach
            </h1>
          </div>
          <div className="text-white ">
            <p className="text-sm">
              We prioritize our clients and their unique needs. We listen to
              your ideas, challenges, and goals, and tailor our services to meet
              your specific requirements. Your success is our success.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 px-6 py-8 flex-1">
          <div className="flex flex-row gap-2 items-center">
            <div className="shadow-md w-12 ">
              <img src={Icon6} alt="Icon6" className="w-full" />
            </div>
            <h1 className="font-semibold text-xl text-white">
              Results-Driven Solutions
            </h1>
          </div>
          <div className="text-white ">
            <p className="text-sm">
              Our primary focus is on delivering results. We combine creativity
              and technical expertise to create digital products that drive
              business growth, enhance user experiences, and provide a
              competitive advantage.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 px-6 py-8 flex-1">
          <div className="flex flex-row gap-2 items-center">
            <div className="shadow-md w-12 ">
              <img src={Icon7} alt="Icon7" className="w-full" />
            </div>
            <h1 className="font-semibold text-xl text-white">
              Collaborative Partnership
            </h1>
          </div>
          <div className="text-white ">
            <p className="text-sm">
              We value long-term relationships with our clients. We see
              ourselves as your digital partner, providing ongoing support,
              maintenance, and updates to ensure your digital products continue
              to thrive.
            </p>
          </div>
        </div>
      </div>
      <section className="hero flex justify-center items-center text-white text-center">
        <div className="lg:px-28 md:px-20 px-5">
          <h1 className="text-2xl lg:text-5xl md:text-3xl font-semibold mb-5">
            {" "}
            What our Clients say About us
          </h1>
          <p className="text-sm md:text-lg lg:text-lg">
            At Devify, we take pride in delivering exceptional digital products
            and services that drive success for our clients. {`Here's`} what some of
            our satisfied clients have to say about their experience working
            with us
          </p>
        </div>
      </section>

      <div className="flex flex-col md:flex-row px-0 md:px-28  mt-4 md:mt-8">
        <div className="flex flex-col flex-1 px-12 py-4 gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-[#D8FF99] font-semibold">
              Devify has been Instrumental in Transforming our Online Presence.{" "}
            </h1>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="text-white">
              Their {`team's`} expertise in web development and design resulted in a
              visually stunning and user-friendly e-commerce platform. Our
              online sales have skyrocketed, and we {`couldn't`} be happier.
            </p>
          </div>
          <div className="flex flex-row gap-4 px-2 py-2 items-center rounded-md bg-[#262626] text-white">
            <img src={Profile1} alt="Profile1" className="w-12" />
            <div className="flex flex-col text-sm">
              <p>Palash Jana</p>
              <p>CEO of OM EPC solution</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 px-12 py-4 gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-[#D8FF99] font-semibold">
              Working with Devify was a breeze.
            </h1>

            <p className="text-white">
              They understood our vision for a mobile app that streamlined our
              food delivery service. The app they delivered exceeded our
              expectations, and our customers love the seamless ordering
              experience. Devify is a trusted partner we highly recommend.
            </p>
          </div>
          <div className="flex flex-row gap-4 px-2 py-2 items-center rounded-md bg-[#262626] text-white">
            <img src={Profile2} alt="Profile2" className="w-12" />
            <div className="flex flex-col text-sm">
              <p>Susmita Chakraborty</p>
              <p>Founder of Watch Your Thoughts.</p>
            </div>
          </div>
        </div>
      </div>

      <section className="hero flex justify-center items-center text-white text-center">
        <div className="lg:px-28 md:px-20 px-5">
          <h1 className="text-2xl lg:text-5xl md:text-3xl font-semibold mb-5">
            {" "}
            Frequently Asked Questions
          </h1>
          <p className="text-sm md:text-lg lg:text-lg">
            Still you have any questions? Contact our Team via
            2022devify@gmail.com
          </p>
        </div>
      </section>

      <div className="grid gird-cols-1 md:grid-cols-2 gap-4 my-8 px-0 md:px-28">
        <div className="flex flex-col gap-2">
          {accordingData1?.map((according, index) => (
            <div
              key={index}
              className="border border-[#e5eaf2] h-fit rounded p-3 flex flex-col"
            >
              <div
                className="flex gap-2 cursor-pointer items-center justify-between w-full"
                onClick={() => handleBorderClick1(index)}
              >
                <div className="flex flex-row items-center gap-2">
                  <div className="border border-gray-400 px-2 py-1 rounded-md">
                    <p
                      className={`text-md font-semibold transition-colors duration-300 ${
                        isAccordingOpen1 === index
                          ? "text-[#C5FF66]"
                          : "text-white"
                      }`}
                    >
                      {according.number}
                    </p>
                  </div>

                  <h2
                    className={`text-sm font-semibold transition-colors duration-300 ${
                      isAccordingOpen1 === index
                        ? "text-[#C5FF66]"
                        : "text-white"
                    }`}
                  >
                    {according.title}
                  </h2>
                </div>
                <p>
                  <FaPlus
                    className={`text-[1.3rem] transition-all duration-300 ${
                      isAccordingOpen1 === index
                        ? "rotate-[45deg] text-[#C5FF66]"
                        : "text-[#424242]"
                    }`}
                  />
                </p>
              </div>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isAccordingOpen1 === index
                    ? "max-h-[500px] opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-white text-[0.9rem] px-8">
                  {according.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          {accordingData2?.map((according, index) => (
            <div
              key={index}
              className="border border-[#e5eaf2] h-fit rounded p-3 flex flex-col"
            >
              <div
                className="flex gap-2 cursor-pointer items-center justify-between w-full"
                onClick={() => handleBorderClick2(index)}
              >
                <div className="flex flex-row items-center gap-2">
                  <div className="border border-gray-400 px-2 py-1 rounded-md">
                    <p
                      className={`text-md font-semibold transition-colors duration-300 ${
                        isAccordingOpen2 === index
                          ? "text-[#C5FF66]"
                          : "text-white"
                      }`}
                    >
                      {according.number}
                    </p>
                  </div>

                  <h2
                    className={`text-sm font-semibold transition-colors duration-300 ${
                      isAccordingOpen2 === index
                        ? "text-[#C5FF66]"
                        : "text-white"
                    }`}
                  >
                    {according.title}
                  </h2>
                </div>
                <p>
                  <FaPlus
                    className={`text-[1.3rem] transition-all duration-300 ${
                      isAccordingOpen2 === index
                        ? "rotate-[45deg] text-[#C5FF66]"
                        : "text-[#424242]"
                    }`}
                  />
                </p>
              </div>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isAccordingOpen2 === index
                    ? "max-h-[500px] opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-white text-[0.9rem] px-8">
                  {according.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="hero flex justify-center items-center text-white text-center">
        <div className="lg:px-28 md:px-20 px-5">
          <h1 className="text-2xl lg:text-5xl md:text-3xl font-semibold mb-5">
            {" "}
            Thank you for your Interest in Devify.
          </h1>
          <p className="text-sm md:text-lg lg:text-lg">
            We would love to hear from you and discuss how we can help bring
            your digital ideas to life. Here are the different ways you can get
            in touch with us.
          </p>
        </div>
      </section>
      <ContactForm />
    </div>
  );
};

export default Home;
