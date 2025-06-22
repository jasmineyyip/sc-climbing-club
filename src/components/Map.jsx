import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import mapImage from '../assets/us-map.png'
import "./Map.css";

// trips
import redRockImg from '../assets/trips/redrocks.png'
import bishopImg from '../assets/trips/bishop.jpeg'
import cdmImg from '../assets/trips/coronadelmar.jpeg'
import malibuImg from '../assets/trips/malibucreek.png'
import pointDumeImg from '../assets/trips/pointdume.jpg'

// list of trip locations with x, y coordinates
const locations = [
  {
    id: 1,
    name: "Red Rock Canyon",
    place: "Las Vegas, NV",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    nickname: "Red Rock",
    image: redRockImg,
    x: 34.1,
    y: 52.5
  },
  {
    id: 2,
    name: "Bishop",
    place: "Bishop, CA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    nickname: "Bishop",
    image: bishopImg,
    x: 32.1,
    y: 80.5
  },
  {
    id: 3,
    name: "Corona Del Mar",
    place: "Newport Beach, CA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    nickname: "Corona Del Mar",
    image: cdmImg,
    x: 230,
    y: 360
  },
  {
    id: 4,
    name: "Malibu Creek",
    place: "Malibu, CA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    nickname: "Malibu Creek",
    image: malibuImg,
    x: 214,
    y: 336
  },
  {
    id: 5,
    name: "Point Dume",
    place: "Malibu, CA",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    nickname: "Point Dume",
    image: pointDumeImg,
    x: 208,
    y: 340
  }
]

const Map = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]); // default location
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/trips", { state: { searchQuery: selectedLocation.nickname } });
  };

  return (
    <div className="map-container">
      {/* Left Panel - Detail Box */}
      <div className="details-box">
        <img src={selectedLocation.image} alt={selectedLocation.name} className="location-image" />
        <div className="location-info">
          <div className="location-header">
            <span className="location-name">{selectedLocation.name}</span>
            <span className="location-place">{selectedLocation.place}</span>
          </div>
          <p className="location-description">{selectedLocation.description}</p>
          <button className="button-text-var2" onClick={handleNavigate}>
            View {selectedLocation.nickname} trips
          </button>
        </div>
      </div>

      <div className="map-image-container">
        <img src={mapImage} alt="Map" className="map-image" />
        {locations.map((loc) => (
          <div
            key={loc.id}
            className="map-dot"
            style={{
              left: `${loc.x}%`,
              top: `${loc.y}%`,
              backgroundColor: selectedLocation.id === loc.id ? '#990000' : '#FFCC00',
            }}
            onClick={() => setSelectedLocation(loc)}
          />
        ))}
      </div>
    </div >
  );
};

export default Map;