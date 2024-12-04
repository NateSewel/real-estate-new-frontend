import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import SearchBar from "../SearchBAr/SearchBar";

const Hero = () => {
  const letter = {
    initial: {
      y: "2rem",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
        type: "string",
      },
    },
  };
  return (
    <motion.section
      className="hero-wrapper"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="innerWidth flexCenter hero-container">
        {/* Left Side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1 variants={letter}>
              Discover <br /> Most Suitable <br /> Airbnb <br /> Properties
              <br />
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
              We help you uncover profitable opportunities by sourcing the ideal
              properties for you.
            </span>
            <span className="secondaryText">
              Analyze market trends, evaluate property potential saving you time
              and effort.
            </span>
            <span className="secondaryText">
              Provide consultation services to simplify the acquisition
              processes.
            </span>
          </div>
          {/* SearchBar */}
          <SearchBar />

          {/* Counter */}
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>

              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>

              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>

              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className=" flexCenter hero-right">
          <motion.div
            initial={{
              x: "7rem",
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="hero image" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
