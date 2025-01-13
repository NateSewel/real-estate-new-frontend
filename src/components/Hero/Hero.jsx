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
              Find profitable
              <br /> Airbnb arbitrage
              <br />
              properties
              <br /> stress-free
              <br />
              across the USA!
            </motion.h1>
          </div>
          <div className="items-center flexColStart hero-des">
            <span className="secondaryText">
              We source profitable properties for Airbnb arbitrage.
            </span>
            <span className="secondaryText">
              Analyze market trends, and handle negotiations to save you time.
            </span>
            <span className="text-lg text-orange-300">
              Refer a friend and earn 30% commission.
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
                Profits per short-term <br />
                rental each month
              </span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={15} end={20} duration={4} />
                <span>+</span>
              </span>

              <span className="secondaryText">
                Property located <br /> each week
              </span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={3} />
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
