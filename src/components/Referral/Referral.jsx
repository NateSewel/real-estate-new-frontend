import "./Referral.css";
import agentImage from "../../assets/real-estate-agent.png";
import starVectorIcon from "../../assets/start-vector.png";

const Referral = () => {
  return (
    <section className="min-h-screen bg-inherit">
      <div className="innerWidth flexCenter" id="about">
        <div className="max-w-screen-2xl mx-auto px-4">
          {/* Main content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
            {/* Left content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="lg:text-4xl font-semibold text-gray-800">
                <span className="text-orange-400">Processes we follow</span>
              </h2>
              <div className="mt-5 flex justify-center lg:justify-start">
                <img
                  src={agentImage}
                  alt="image"
                  className="max-[640px]:w-1/2 rounded-lg shadow-lg image-icon"
                />
              </div>
            </div>

            {/* Right content */}
            <div className="lg:w-1/2">
              {/* Vector image */}
              <div className="relative flex justify-center">
                <img className="mb-2" src={starVectorIcon} alt="vector image" />
              </div>
              <div className="lg:w-1/2">
                {/* Services List */}
                {[...Array(6)].map((_, index) => (
                  <div
                    className="flex items-start space-x-4 lg:mb-6"
                    key={index}
                  >
                    <h3 className="lg:text-3x1 font-bold text-gray-800">
                      {`0${index + 1}.`}
                    </h3>
                    <div>
                      <h4 className="lg:text-lg font-bold text-[#0F0E0E]">
                        {getServiceTitle(index)}
                      </h4>
                      <p className="text-sm text-[#2D2D2D] lg:my-2 md:w-3/5">
                        {getServiceDescription(index)}
                      </p>
                      <div className="border-t-2 lg:my-3"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const getServiceTitle = (index) => {
  const titles = [
    "Book a meeting with Us",
    "Let’s discuss your project",
    "Find your ideal property",
    "We connect you directly with homeowners",
    "Sign the lease and all necessary forms",
    "Our Referral Package",
  ];
  return titles[index];
};

const getServiceDescription = (index) => {
  const descriptions = [
    "Schedule a meeting with us to talk about your project.",
    "We analyze your investment goals, budget, and property preferences to provide tailored insights.",
    "We perform detailed market research to find high-demand locations.",
    "We will schedule a call with you and the homeowners to discuss the next steps for signing the lease.",
    "The final step is to sign the lease and complete all required paperwork.",
    "Refer a friend and earn 30% commission.",
  ];
  return descriptions[index];
};

export default Referral;
