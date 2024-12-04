import "./PropertyCard.css";
import PropTypes from "prop-types";
import { truncate } from "lodash";
import { useNavigate } from "react-router-dom";
import Heart from "../Heart/Heart";

const PropertyCard = ({ card }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flexColStart r-card"
      onClick={() => navigate(`../properties/${card.id}`)}
    >
      {/* Heart for favourite */}
      <Heart id={card?.id} />
      <img src={card.image} alt="home" />

      <span className="secondaryText r-price">
        <span style={{ color: "orange" }}>$</span>
        <span>{card.price}</span>
      </span>

      <span className="primaryText">
        {truncate(card.title, { length: 15 })}
      </span>
      <span className="secondaryText">
        {truncate(card.description, { length: 80 })}
      </span>
    </div>
  );
};

PropertyCard.propTypes = {
  card: PropTypes.string.isRequired,
};

// PropertyCard.propTypes = {
//   card: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     price: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default PropertyCard;
