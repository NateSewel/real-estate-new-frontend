import { Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import * as ELG from "esri-leaflet-geocoder";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const GeoCoderMarker = ({ address }) => {
  const map = useMap();
  const [position, setPosition] = useState([60, 19]);

  useEffect(() => {
    ELG.geocode()
      .text(address)
      .run((err, results) => {
        console.log("Geocoding Request Results:", { err, results });
        if (err) {
          console.error("Geocoding failed:", err);
          return;
        }
        if (results?.results?.length > 0) {
          const { lat, lng } = results.results[0].latlng;
          setPosition([lat, lng]);
          map.flyTo([lat, lng], 6);
        } else {
          console.warn("No results found for address:", address);
        }
      });
  }, [address, map]);
  return (
    <Marker position={position} icon={DefaultIcon}>
      <Popup />
    </Marker>
  );
};

GeoCoderMarker.propTypes = {
  address: PropTypes.string.isRequired,
};

export default GeoCoderMarker;
