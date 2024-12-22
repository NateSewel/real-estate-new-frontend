// import cardImg1 from "../../assets/user-1.png";
// import cardImg2 from "../../assets/user-2.png";
// import cardImg3 from "../../assets/user-3.png";
// import quoteIcon from "../../assets/quate_icon.png";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "jhunter85",
    text: "Seller was very responsive and organized and delivered leads for my Airbnb business. Will definitely be using him again.",
    img: "https://picsum.photos/id/1060/536/354?blur=2",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Real Estate Wholesale",
    text: "Desmond is one of the best freelancers i've worked with. He always gets the job done. He is honest and fast with his work",
    img: "https://picsum.photos/id/32/367/267",
    delay: 0.5,
  },

  {
    id: 3,
    name: "sierracymone",
    text: "Desmond was excellent! he did more than I asked for in locating my short-term rental he was very responsive and great at communicating. I will use him again.",
    img: "https://fastly.picsum.photos/id/58/1280/853.jpg?hmac=YO3QnOm9TpyM5DqsJjoM4CHg8oIq4cMWLpd9ALoP908",
    delay: 0.8,
  },
  {
    id: 4,
    name: "jourdanross",
    text: "Desmond is very prompt with his communication and started sending me properties for reviews right away. If you're looking for someone to assist you with finding short term rentals, he's your guy! His email scripts are amazing and guaranteed to gain traction..",
    img: "https://picsum.photos/id/237/536/354",
    delay: 1.1,
  },
  {
    id: 5,
    name: "sasha_123s",
    text: "Desmond did an outstanding job. He was attentive to details, he diligently understood my requirements, and downright exceeded expectations. I recommend Desmond for his services because he’s an expert in his field. I enjoyed working with him because he is knowledgeable..",
    img: "https://fastly.picsum.photos/id/48/5000/3333.jpg?hmac=y3_1VDNbhii0vM_FN6wxMlvK27vFefflbUSH06z98so",
    delay: 1.3,
  },
  {
    id: 6,
    name: "josephchuk",
    text: "Desmond's expertise, professionalism, and dedication to ensuring my success in leasing his found property is exceptional. He truly exceeded my expectations. He kept me informed on every step of the way, promptly addressing any questions or concerns I had..",
    img: "https://fastly.picsum.photos/id/56/2880/1920.jpg?hmac=BIplhYgNZ9bsjPXYhD0xx6M1yPgmg4HtthKkCeJp6Fk",
    delay: 1.5,
  },
  {
    id: 7,
    name: "Airbnb arbitrage rentals",
    text: "Successfully completed his mission of identifying suitable real estate properties for our business. His professionalism and thorough research provided excellent options for properties. Highly recommended for his expertise and reliability.",
    img: "https://picsum.photos/536/354",
    delay: 1.7,
  },
];

const Testimonial = () => {
  const setting = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-16 mb-10 pb-10 pt-0 innerWidth flexCenter">
      <div className="container">
        {/* Header section */}
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-6">
          <h1 className="uppercase font-semibold text-orange-400">
            OUR TESTIMONIAL
          </h1>
          <p className="font-semibold text-3xl">
            Upwork And Fiverr Reviews Reflect Our Clients' Satisfaction
          </p>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            The reviews below showcases our satisfied clients sharing their
            experiences and successes with our expert property finding
            strategies.
          </p>
        </div>
        {/* Testimonial card */}
        <div>
          <Slider {...setting}>
            {TestimonialData.map((item) => {
              return (
                <div key={item.id}>
                  <div className="flex flex-col overflow-hidden gap-4 p-8 shadow-lg mx-4 rounded-xl bg-slate-100/90">
                    {/* upper section */}
                    <div className="flex justify-start items-center gap-5">
                      <img
                        src={item.img}
                        alt="image icon"
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <p className="text-xl font-bold text-black/80">
                          {item.name}
                        </p>
                        <p className="text">{item.name}</p>
                      </div>
                    </div>
                    {/* bottom section */}
                    <div className="py-6 space-y-4">
                      <p className="text-sm text-gray-500">{item.text}</p>
                      <p>⭐⭐⭐⭐⭐</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
    // <section className="py-16 bg-slate-300 innerWidth flexCenter">
    //   <div className="max-w-screen-2xl container px-5 mx-auto">
    //     {/* Header */}
    // <div className="text-center mb-12">
    //   <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
    //     Clients speaks volumes{" "}
    //     <span className="text-orange-400">about us</span>
    //   </h2>
    //   <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
    //     Listen to the stories of our satisfied clients, sharing their
    //     experiences and successes with our exceptional real estate services.
    //   </p>
    // </div>
    //     {/* Testimonial section */}
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //       {/* Card 1 */}
    //       <div className="bg-white rounded-lg shadow-md p-6">
    //         <div className="mb-4">
    //           <img
    //             src={cardImg1}
    //             alt="card image"
    //             className="size-12 rounded-full object-cover"
    //           />
    //         </div>
    // <blockquote className="text-gray-700 text-sm mb-3">
    //   "Desmond is very prompt with his communication and started sending
    //   me properties for reviews right away. If you're looking for
    //   someone to assist you with finding short term rentals, he's your
    //   guy! His email scripts are amazing and guaranteed to gain
    //   traction. By the end of your order you should certainly have few
    //   good properties to work with."
    // </blockquote>
    //         <div className="text-start flex justify-between items-center">
    //           <div>
    //             <h4 className="text-gray-800 font-semibold">George Powell</h4>
    //             <p className="text-sm text-gray-500">Business owner</p>
    //           </div>
    //           <div>
    //             <span className="">
    //               <img src={quoteIcon} alt="quote icon" />
    //             </span>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Card 2 */}
    //       <div className="bg-white rounded-lg shadow-md p-6">
    //         <div className="mb-4">
    //           <img
    //             src={cardImg2}
    //             alt="card image"
    //             className="size-12 rounded-full object-cover"
    //           />
    //         </div>
    //         <blockquote className="text-gray-700 text-sm mb-3">
    //           "Successfully completed his mission of identifying suitable real
    //           estate properties for our business. His professionalism and
    //           thorough research provided excellent options for properties.
    //           Highly recommended for his expertise and reliability. "
    //         </blockquote>
    //         <div className="text-start flex justify-between items-center">
    //           <div>
    //             <h4 className="text-gray-800 font-semibold">
    //               Michael Thompson
    //             </h4>
    //             <p className="text-sm text-gray-500">Pegnant Digital (CEO)</p>
    //           </div>
    //           <div>
    //             <span className="">
    //               <img src={quoteIcon} alt="quote icon" />
    //             </span>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Card 3 */}
    //       <div className="bg-white rounded-lg shadow-md p-6">
    //         <div className="mb-4">
    //           <img
    //             src={cardImg3}
    //             alt="card image"
    //             className="size-12 rounded-full object-cover"
    //           />
    //         </div>
    //         <blockquote className="text-gray-700 text-sm mb-3">
    //           "Seller was very responsive and organized and delivered leads for
    //           my Airbnb business. Will definitely be using him again."
    //         </blockquote>
    //         <div className="text-start flex justify-between items-center">
    //           <div>
    //             <h4 className="text-gray-800 font-semibold">Peter Jakes</h4>
    //             <p className="text-sm text-gray-500">Real Estate Investor</p>
    //           </div>
    //           <div>
    //             <span className="">
    //               <img src={quoteIcon} alt="quote icon" />
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Dots for Slider */}
    //     <div className="flex justify-center mt-8">
    //       <div className="size-2 bg-orange-400 rounded-full mx-1"></div>
    //       <div className="size-2 bg-orange-300 rounded-full mx-1"></div>
    //       <div className="size-2 bg-orange-200 rounded-full mx-1"></div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Testimonial;
