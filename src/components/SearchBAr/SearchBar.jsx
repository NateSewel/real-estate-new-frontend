import { HiLocationMarker } from "react-icons/hi";
import "../../index.css";
import "../../App.css";
import PropTypes from "prop-types";

const SearchBar = ({ filter, setFilter }) => {
  return (
    <div className="flexCenter innerWidth search-bar">
      <HiLocationMarker color="var(--blue)" size={25} />
      <input
        placeholder="Search by title/city/country.."
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button className="button">Search</button>
    </div>
  );
};

SearchBar.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.string.isRequired,
};

export default SearchBar;
