import Companies from "../components/Companies/Companies";
import Contact from "../components/Contact/Contact";
import Form from "../components/Form/Form";
import GetStarted from "../components/GetStarted/GetStarted";
import Hero from "../components/Hero/Hero";
import Referral from "../components/Referral/Referral";
import Residencies from "../components/Residencies/Residencies";
import Team from "../components/Team/Team";
import Testimonial from "../components/Testimonial/Testimonial";
import Value from "../components/Value/Value";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

const Website = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Hero />
      </div>
      <ToastContainer />
      <Companies />
      <Residencies />
      <Value />
      <Referral />
      <Testimonial />
      <Team />
      <Contact />
      <Form />
      <GetStarted />
    </div>
  );
};

export default Website;
