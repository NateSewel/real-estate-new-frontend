import "./Residencies.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { sliderSettings } from "../../utils/common";
import "../../index.css";
import PropertyCard from "../PropertyCard/PropertyCard";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";

const Residencies = () => {
  const { data, isError, isLoading } = useProperties();

  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart ">
          <span className="orangeText">Profitable Airbnb</span>
          <span className="orangeText">approved properties</span>
          <span className="secondaryText">
            in prime locations <br /> ready for leasing
          </span>
        </div>

        <Swiper {...sliderSettings}>
          <div>
            <SliderButtons />
          </div>

          {data.slice(0, 8).map((card, i) => (
            <SwiperSlide key={i}>
              <PropertyCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

export default Residencies;
