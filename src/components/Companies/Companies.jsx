import "./Companies.css";
import prologis from "../../../public/prologis.png";
import tower from "../../../public/tower.png";
import equinix from "../../../public/equinix.png";
import realty from "../../../public/realty.png";

import { motion } from "framer-motion";

const Companies = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="innerWidth container flex flex-col">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right, transparent, black, transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <img
              src={prologis}
              alt="company logo"
              className="logo-ticker-image"
            />
            <img src={tower} alt="company logo" className="logo-ticker-image" />
            <img
              src={equinix}
              alt="company logo"
              className="logo-ticker-image"
            />
            <img
              src={realty}
              alt="company logo"
              className="logo-ticker-image"
            />

            {/* Second set of logo for animation */}
            <img
              src={prologis}
              alt="company logo"
              className="logo-ticker-image"
            />
            <img src={tower} alt="company logo" className="logo-ticker-image" />
            <img
              src={equinix}
              alt="company logo"
              className="logo-ticker-image"
            />
            <img
              src={realty}
              alt="company logo"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
