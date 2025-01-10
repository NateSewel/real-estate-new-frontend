import "./Hero.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";
// import SearchBar from "../SearchBAr/SearchBar";

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
      <div className="innerWidth flex flex-wrap justify-between hero-container">
        {/* Left Side */}
        <div className="p-5 m-5 flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1 variants={letter}>
              Find Profitable
              <br /> Airbnb Arbitrage
              <br />
              Properties
              <br /> stress-free
              <br />
              across the USA!
            </motion.h1>
          </div>
          <div className="items-center flexColStart hero-des">
            <span className="secondaryText">
              We Source Profitable Properties for Airbnb Arbitrage.
            </span>
            <span className="secondaryText">
              Analyze Market Trends, and Handle Negotiations to Save You Time.
            </span>
            <span className="text-lg text-orange-300">
              Refer A Friend and Earn 30% Commission.
            </span>
          </div>
          {/* SearchBar */}
          {/* <SearchBar className="search-bar" /> */}

          {/* Counter */}
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                $
                <CountUp start={1800} end={2000} duration={4} />
                <span>+</span>
              </span>

              <span className="secondaryText">
                Profits per Short-term <br />
                rental Each Month
              </span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={35} end={45} duration={4} />
                <span>+</span>
              </span>

              <span className="secondaryText">
                Property located <br /> Each week
              </span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={5} />
                <span>+</span>
              </span>

              <span className="secondaryText">
                Years of industrial <br />
                experience
              </span>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="paddings pb-20 pr-5 hero-right">
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
            <img className="" src="./hero-image.png" alt="hero image" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
