import "./Referral.css";
import agentImage from "../../assets/real-estate-agent.png";
import starVectorIcon from "../../assets/start-vector.png";

const Referral = () => {
  return (
    <section className="bg-inherit my-5 py-24 innerWidth flexCenter" id="about">
      <div className="max-w-screen-2xl mx-auto">
        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 px-4 lg:py-24 gap-10 lg:gap-20">
          {/* Left content */}
          <div className="lg:w-1/2 text-center lg:text-left ">
            <h2 className="lg:text-4xl font-semibold text-gray-800">
              <span className="text-orange-400">Processes we follow</span>
            </h2>
            <div className="mt-4 lg:mt-10 flex justify-center lg:justify-start">
              <img
                src={agentImage}
                alt="image"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right content */}

          <div className="lg:w-1/2">
            {/* Vector image */}
            <div className="relative flex justify-center mb-3 lg:mb-10">
              <img src={starVectorIcon} alt="vector image" />
            </div>
            {/* Service 1 */}
            <div className="flex items-start space-x-4 lg:mb-6">
              <h3 className="lg:text-3x1 font-bold text-gray-800">01.</h3>
              <div>
                <h4 className="lg:text-lg font-bold text-[#0F0E0E]">
                  Book a meeting with Us
                </h4>
                <p className="text-sm text-[#2D2D2D] lg:my-2 md:w-3/5">
                  Schedule a meeting with us to talk about your project.
                </p>
                <div className="border-t-2 lg:my-3"></div>
              </div>
            </div>
            {/* Service 2 */}
            <div className="flex items-start space-x-4 lg:mb-6">
              <h3 className="lg:text-3x1 font-bold text-gray-800">02.</h3>
              <div>
                <h4 className="lg:text-lg font-bold text-[#0F0E0E]">
                  Let’s discuss your project
                </h4>
                <p className="text-sm text-[#2D2D2D] lg:my-2 md:w-3/5">
                  We analyze your investment goals, budget, and property
                  preferences to provide tailored insights, strategies, and
                  actionable steps for optimizing returns and achieving your
                  objectives.
                </p>
                <div className="border-t-2 lg:my-3"></div>
              </div>
            </div>
            {/* Service 3 */}
            <div className="flex items-start space-x-4 lg:mb-6">
              <h3 className="lg:text-3x1 font-bold text-gray-800">03.</h3>
              <div>
                <h4 className="lg:text-lg font-bold text-[#0F0E0E]">
                  Find your ideal property
                </h4>
                <p className="text-sm text-[#2D2D2D] lg:my-2 md:w-3/5">
                  We perform detailed market research to find high-demand
                  locations, assess property potential, and ensure regulatory
                  compliance, targeting areas favored by tourists and business
                  travelers.
                </p>
                <div className="border-t-2 lg:my-3"></div>
              </div>
            </div>
            {/* Service 4 */}
            <div className="flex items-start space-x-4 lg:mb-6">
              <h3 className="lg:text-3x1 font-bold text-gray-800">04.</h3>
              <div>
                <h4 className="lg:text-lg font-bold text-[#0F0E0E]">
                  We connect you directly with homeowners
                </h4>
                <p className="text-sm text-[#2D2D2D] lg:my-2 md:w-3/5">
                  We will schedule a call with you and the homeowners to discuss
                  the next steps for signing the lease.
                </p>
                <div className="border-t-2 lg:my-3"></div>
              </div>
            </div>
            {/* Service 5 */}
            <div className="flex items-start space-x-4 lg:mb-6">
              <h3 className="lg:text-3x1 font-bold text-gray-800">05.</h3>
              <div>
                <h4 className="lg:text-lg font-bold text-[#0F0E0E]">
                  Sign the lease and all necessary forms
                </h4>
                <p className="text-sm text-[#2D2D2D] lg:my-2 md:w-3/5">
                  The final step is to sign the lease and complete all required
                  paper work.
                </p>
                <div className="border-t-2 lg:my-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Referral;
