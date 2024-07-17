import { useState } from "react";
import ContactForm from "../commponents/ContactForm";
import logo from "../assets/Logo.png";
import ContactFormModal from "../commponents/ContactFormModal";

const Process = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };
  const handleModalClose = () => {
    setOpenModal(false);
  };
  return (
    <div className="w-[100%] h-[100%] bg-[#1E1E1E] flex flex-col pb-8">
      {openModal ? <ContactFormModal close={handleModalClose} /> : null}
      <section className="hero flex justify-center items-center text-white text-center">
        <div className="lg:px-28 md:px-20 px-5">
          <h1 className="text-2xl lg:text-5xl md:text-3xl font-semibold mb-5">
            Process of Starting the Project
          </h1>
          <p className="text-sm md:text-lg lg:text-lg">
            At Devify, we value transparency, collaboration, and delivering
            exceptional results.
          </p>
        </div>
      </section>

      <section className="design p-5 md:px-10 lg:p-14 border-b border-b-gray-800">
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold">
          At Devify
        </h1>
        <p className="text-white text-sm md:text-base lg:text-lg my-5">
          We follow a structured and collaborative process to ensure the
          successful delivery of exceptional digital products. Our process
          combines industry best practices, creative thinking, and a
          client-centric approach.
        </p>

        {/* <div className="text-white bg-gray-800 p-2 w-full md:w-[45%] lg:w-[24%]">
          <p className="text-sm flex justify-center">
            Here are ten examples of our notable works:
          </p>
        </div> */}
      </section>

      <section className="story p-5 md:px-10 lg:p-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-14">
          <div className="border border-gray-800 p-10">
            <div className="flex items-center gap-2 text-g mb-2">
              <h1 className="text-8xl font-bold">01</h1>
              <h2 className="text-xl font-semibold">Discovery</h2>
            </div>
            <div className="mt-5">
              <p className="text-gray-400">
                We begin by thoroughly understanding your business goals, target
                audience, and project requirements. We conduct in-depth research
                to gather insights and define project objectives, allowing us to
                develop a tailored strategy.
              </p>
            </div>
          </div>
          <div className="border border-gray-800 p-10">
            <div className="flex items-center gap-2 text-g mb-2">
              <h1 className="text-8xl font-bold">02</h1>
              <h2 className="text-xl font-semibold">Planning and Strategy</h2>
            </div>
            <div className="mt-5">
              <p className="text-gray-400">
                Based on the gathered information, we create a comprehensive
                project plan and strategy. This includes defining project
                milestones, timelines, deliverables, and resource allocation. We
                collaborate closely with you to align our strategy with your
                vision.
              </p>
            </div>
          </div>

          <div className="border border-gray-800 p-10">
            <div className="flex items-center gap-2 text-g mb-2">
              <h1 className="text-8xl font-bold">03</h1>
              <h2 className="text-xl font-semibold">Design</h2>
            </div>
            <div className="mt-5">
              <p className="text-gray-400">
                Our expert designers translate the project requirements into
                captivating visual designs. We create wireframes, mockups, and
                interactive prototypes to showcase the user interface, user
                experience, and overall design aesthetics. We iterate on the
                designs based on your feedback until we achieve the perfect look
                and feel.
              </p>
            </div>
          </div>

          <div className="border border-gray-800 p-10">
            <div className="flex items-center gap-2 text-g mb-2">
              <h1 className="text-8xl font-bold">04</h1>
              <h2 className="text-xl font-semibold">Development</h2>
            </div>
            <div className="mt-5">
              <p className="text-gray-400">
                Once the designs are approved, our skilled development team
                brings them to life. We use cutting-edge technologies and coding
                best practices to build robust and scalable digital products.
                Throughout the development phase, we maintain open lines of
                communication to keep you updated on progress and address any
                questions or concerns.
              </p>
            </div>
          </div>

          <div className="border border-gray-800 p-10">
            <div className="flex items-center gap-2 text-g mb-2">
              <h1 className="text-8xl font-bold">05</h1>
              <h2 className="text-xl font-semibold">
                Testing and Quality Assurance
              </h2>
            </div>
            <div className="mt-5">
              <p className="text-gray-400">
                We conduct rigorous testing to ensure that your digital product
                functions flawlessly across different devices, browsers, and
                operating systems. Our quality assurance team meticulously
                checks for bugs, usability issues, and performance bottlenecks.
                We strive for a seamless user experience and a high level of
                reliability.
              </p>
            </div>
          </div>

          <div className="border border-gray-800 p-10">
            <div className="flex items-center gap-2 text-g mb-2">
              <h1 className="text-8xl font-bold">06</h1>
              <h2 className="text-xl font-semibold">Deployment and Launch</h2>
            </div>
            <div className="mt-5">
              <p className="text-gray-400">
                When your digital product is thoroughly tested and meets your
                satisfaction, we prepare for deployment. We handle all the
                technical aspects of launching your product, ensuring a smooth
                transition from development to the live environment. We assist
                with setting up hosting, configuring servers, and managing any
                required integrations.
              </p>
            </div>
          </div>

          <div className="border border-gray-800 p-10">
            <div className="flex items-center gap-2 text-g mb-2">
              <h1 className="text-8xl font-bold">07</h1>
              <h2 className="text-xl font-semibold">Post-Launch Support</h2>
            </div>
            <div className="mt-5">
              <p className="text-gray-400">
                Our commitment to your success {`doesn't`} end with the launch.
                We provide ongoing support and maintenance services to ensure
                your digital product continues to perform optimally. We offer
                different support packages based on your needs, including bug
                fixes, feature enhancements, security updates, and technical
                support.
              </p>
            </div>
          </div>

          <div className="border border-gray-800 p-10">
            <div className="flex items-center gap-2 text-g mb-2">
              <h1 className="text-8xl font-bold">08</h1>
              <h2 className="text-xl font-semibold">Continuous Improvement</h2>
            </div>
            <div className="mt-5">
              <p className="text-gray-400">
                We believe in continuous improvement and strive to optimize your
                digital product even after launch. We monitor user feedback,
                analytics, and market trends to identify opportunities for
                enhancement and growth. We proactively suggest improvements and
                updates to keep your digital product ahead of the curve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="p-10 text-center text-white bg-[#1e221e] border border-gray-800">
        <img src={logo} className="h-20 w-20 mx-auto" alt="" />
        <h1 className="text-2xl mt-5">
          Thank you for your Interest in Devify.
        </h1>
        <p className="text-sm mt-2">
          We would love to hear from you and discuss how we can help bring your
          digital ideas to life. Here are the different ways you can get in
          touch with us.
        </p>
        {/* <Link to="/contact">
          <button className="rounded-sm p-2 text-black bg-[#9EFF00] mx-auto text-sm font-semibold w-full lg:w-28 mt-5">
            Start Project
          </button>
        </Link> */}
        <button
          onClick={handleModalOpen}
          className="rounded-sm p-2 text-black bg-[#9EFF00] text-sm font-semibold w-full lg:w-28 md:w-28 mt-5 md:mt-5"
        >
          Start Project
        </button>
      </div>

      <ContactForm />
    </div>
  );
};

export default Process;
