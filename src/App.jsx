import { Route, Routes } from "react-router-dom";
import Nav from "./Nav/Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Process from "./Pages/Process";
import Works from "./Pages/Works";
import Footer from "./commponents/Footer";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<Process />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
