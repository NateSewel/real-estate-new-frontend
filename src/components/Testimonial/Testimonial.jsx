import cardImg1 from "../../assets/user-1.png";
import cardImg2 from "../../assets/user-2.png";
import cardImg3 from "../../assets/user-3.png";
import quoteIcon from "../../assets/quate_icon.png";

const Testimonial = () => {
  return (
    <section className="py-16 bg-slate-300 innerWidth flexCenter">
      <div className="max-w-screen-2xl container px-5 mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            Clients speaks volumes{" "}
            <span className="text-orange-400">about us</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Listen to the stories of our satisfied clients, sharing their
            experiences and successes with our exceptional real estate services.
          </p>
        </div>
        {/* Testimonial section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <img
                src={cardImg1}
                alt="card image"
                className="size-12 rounded-full object-cover"
              />
            </div>
            <blockquote className="text-gray-700 text-sm mb-3">
              "Desmond is very prompt with his communication and started sending
              me properties for reviews right away. If you're looking for
              someone to assist you with finding short term rentals, he's your
              guy! His email scripts are amazing and guaranteed to gain
              traction. By the end of your order you should certainly have few
              good properties to work with."
            </blockquote>
            <div className="text-start flex justify-between items-center">
              <div>
                <h4 className="text-gray-800 font-semibold">George Powell</h4>
                <p className="text-sm text-gray-500">Business owner</p>
              </div>
              <div>
                <span className="">
                  <img src={quoteIcon} alt="quote icon" />
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <img
                src={cardImg2}
                alt="card image"
                className="size-12 rounded-full object-cover"
              />
            </div>
            <blockquote className="text-gray-700 text-sm mb-3">
              "Successfully completed his mission of identifying suitable real
              estate properties for our business. His professionalism and
              thorough research provided excellent options for properties.
              Highly recommended for his expertise and reliability. "
            </blockquote>
            <div className="text-start flex justify-between items-center">
              <div>
                <h4 className="text-gray-800 font-semibold">
                  Michael Thompson
                </h4>
                <p className="text-sm text-gray-500">Pegnant Digital (CEO)</p>
              </div>
              <div>
                <span className="">
                  <img src={quoteIcon} alt="quote icon" />
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <img
                src={cardImg3}
                alt="card image"
                className="size-12 rounded-full object-cover"
              />
            </div>
            <blockquote className="text-gray-700 text-sm mb-3">
              "Seller was very responsive and organized and delivered leads for
              my Airbnb business. Will definitely be using him again."
            </blockquote>
            <div className="text-start flex justify-between items-center">
              <div>
                <h4 className="text-gray-800 font-semibold">Peter Jakes</h4>
                <p className="text-sm text-gray-500">Real Estate Investor</p>
              </div>
              <div>
                <span className="">
                  <img src={quoteIcon} alt="quote icon" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dots for Slider */}
        <div className="flex justify-center mt-8">
          <div className="size-2 bg-orange-400 rounded-full mx-1"></div>
          <div className="size-2 bg-orange-300 rounded-full mx-1"></div>
          <div className="size-2 bg-orange-200 rounded-full mx-1"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
