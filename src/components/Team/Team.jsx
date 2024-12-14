import DesmondImg from "../../assets/Desmond.png";
import NonyeImg from "../../assets/Nonye.png";
import FaithImg from "../../assets/Faithwin.png";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <section className="t-wrapper pt-20">
      <div className="paddings innerWidth flexCenter pt-20">
        <div className="bg-gray-100 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Our <span className="text-orange-400">Team</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Meet the Exceptional Minds Behind Our Organization.
            </p>
          </div>
          <div className="container mx-auto grid gap-6 w-full px-10 pt-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Cards */}
            <div className="relative mt-16 mb-32">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src={DesmondImg}
                      alt="team-img"
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <h1 className="font-bold text-2xl text-center mb-1 text-gray-800">
                    Desmond U.
                  </h1>
                  <p className="text-gray-800 text-sm text-center">Founder</p>
                  <div className="w-full flex justify-center pt-5 pb-5 space-x-3">
                    <Link
                      className="bg-gray-300 shadow rounded-full flex items-center justify-center h-10 w-10 text-black"
                      href="#"
                    >
                      <FaFacebook />
                    </Link>
                    <Link
                      className="bg-gray-300 shadow rounded-full flex items-center justify-center h-10 w-10 text-black"
                      href="#"
                    >
                      <FaTwitter />
                    </Link>
                    <Link
                      className="bg-gray-300 shadow rounded-full flex items-center justify-center h-10 w-10 text-black"
                      href="#"
                    >
                      <FaInstagram />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="relative mt-16 mb-32">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src={FaithImg}
                      alt="team-img"
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <h1 className="font-bold text-2xl text-center mb-1 text-gray-800">
                    Faithwin C.
                  </h1>
                  <p className="text-gray-800 text-sm text-center">Member</p>
                  <div className="w-full flex justify-center pt-5 pb-5 space-x-3">
                    <Link
                      className="bg-gray-300 shadow rounded-full flex items-center justify-center h-10 w-10 text-black"
                      href="#"
                    >
                      <FaFacebook />
                    </Link>
                    <Link
                      className="bg-gray-300 shadow rounded-full flex items-center justify-center h-10 w-10 text-black"
                      href="#"
                    >
                      <FaTwitter />
                    </Link>
                    <Link
                      className="bg-gray-300 shadow rounded-full flex items-center justify-center h-10 w-10 text-black"
                      href="#"
                    >
                      <FaInstagram />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="relative mt-16 mb-32">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-20 w-full flex justify-center">
                  <div className="h-32 w-32">
                    <img
                      src={NonyeImg}
                      alt="team-img"
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <h1 className="font-bold text-2xl text-center mb-1 text-gray-800">
                    Nonye O.
                  </h1>
                  <p className="text-gray-800 text-sm text-center">Member</p>
                  <div className="w-full flex justify-center pt-5 pb-5 space-x-3">
                    <Link
                      className="bg-gray-300 shadow rounded-full flex items-center justify-center h-10 w-10 text-black"
                      href="#"
                    >
                      <FaFacebook />
                    </Link>
                    <Link
                      className="bg-gray-300 shadow rounded-full flex items-center justify-center h-10 w-10 text-black"
                      href="#"
                    >
                      <FaTwitter />
                    </Link>
                    <Link
                      className="bg-gray-300 shadow rounded-full flex items-center justify-center h-10 w-10 text-black"
                      href="#"
                    >
                      <FaInstagram />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
