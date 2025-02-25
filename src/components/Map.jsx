import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Map.css";

// trips
import redRockImg from '../assets/trips/redrocks.png'
import bishopImg from '../assets/trips/bishop.jpeg'
import cdmImg from '../assets/trips/coronadelmar.jpeg'

// list of trip locations with x, y coordinates
const locations = [
    { 
        id: 1, 
        name: "Red Rock Canyon", 
        place: "Las Vegas, NV", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
        nickname: "Red Rock", 
        image: redRockImg,
        x: 273, 
        y: 315 
    },
    { 
        id: 2, 
        name: "Bishop", 
        place: "Bishop, CA", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
        nickname: "Bishop", 
        image: bishopImg, 
        x: 210, 
        y: 260 
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

      <div className="map-wrapper">
        <svg className="states" xmlns="http://www.w3.org/2000/svg" viewBox="50 180 400 250" width="800" height="600">
          {/* States */}
          {/* California */}
          <a className="state" href="#" id="CA">
            <title>California</title>
            <path className="state" data-id="CA" d="m206.014 363.775.388 2.135v.389l-.388-2.524zm-14.268-8.348.679 1.456.388-.097-1.067-1.359zm16.986-.29.29 2.523 1.748 1.262-2.038-3.786zm-11.745-13.784-1.068-.29.874.387.194-.097zm-10.774-2.912-2.62 1.553.679.68 1.941-2.233zm-5.047-1.844-.194.777.873.194-.68-.97zm8.541 1.941 4.271 2.427.777-.68-5.048-1.747zm-33.098-85.512-.097.097.097-.097zm10.385.485-.097-.291v.388l.097-.097zM223 179.841l-3.786-.971-41.543-11.454-15.433-4.659v.388l-.873 9.61-4.077 11.356-6.794 8.445-.194 4.27 3.3 5.921 1.65 7.765-2.33 6.31.389 6.308-1.165 2.621 3.98 8.639 2.523 3.3-.194 9.415 6.018 5.727 3.494-5.824 3.786 3.009 1.456-1.359-5.242.97-.097 4.95 1.068 6.213-2.912-2.815-1.65-3.785-.486 5.241 1.36 10.386 5.435 6.697-3.591 4.66.582 5.92 3.882 6.018 6.795 18.636 2.135 1.165-.68 12.91 1.068 1.552 14.56 5.242 4.465 4.756 1.553 3.106 4.27 2.426 4.66.874 1.94 5.338 3.883 1.845 5.824 6.891 5.436 9.027-.388 8.347 3.008 3.98 39.7 3.882 3.494-.194 1.553-4.27-3.01-2.233.098-7.086 1.747-.388 3.494-8.541 2.136-3.98 5.435-3.203-3.009-4.077-3.397-9.124.194-2.426v-.097l-2.524-3.397-7.765-10.386-15.044-21.16-20.966-30.09-11.842-16.403-11.453-16.5 13.2-56.006.874-3.689z"/>
          </a>
          {/* Nevada */}
          <a className="state" href="#" id="NV">
            <title>Nevada</title>
            <path className="state" data-id="NV" d="m294.827 295.83 10.094-62.8 5.145-31.448.582-3.106-2.815-.485-10.968-2.038-27.469-5.436-2.718-.582-2.717-.583-13.686-3.008-24.557-5.824-2.718-.68-.874 3.689-13.2 56.005 11.453 16.5 11.842 16.404 20.966 30.09 15.044 21.16 7.765 10.386 2.524 3.397v-.291l1.553-3.3.097-15.434 4.27-3.59 3.398 3.008 2.233.097 4.27-18.83v-.194l.486-3.106z"/>
          </a>
          <a className="state" href="#" id="AZ">
            <title>Arizona</title>
            <path className="state" data-id="AZ" d="m372.186 309.905-32.71-4.077-17.569-2.523-25.042-3.98-2.524-.388v.194l-4.27 18.83-2.233-.097-3.397-3.009-4.27 3.591-.098 15.433-1.553 3.3v.389l-.194 2.426 3.397 9.124 3.009 4.077-5.436 3.203-2.135 3.98-3.494 8.541-1.747.388-.097 7.086 3.009 2.233-1.553 4.27-3.495.194-2.038 3.786 6.988 4.368 13.201 7.377 40.767 21.645 34.554 4.27h.388l2.718-28.633.68-7.086 7.28-75.127.387-3.494-2.523-.291z"/>
          </a>
          {/* Utah */}
          <a className="state" href="#" id="UT">
            <title>Utah</title>
            <path className="state" data-id="UT" d="m352.385 204.98-25.042-3.786-13.977-2.232-2.718-.486-.582 3.106-5.145 31.449-10.094 62.8-.486 3.106 2.524.388 25.042 3.98 17.569 2.523 32.71 4.077 2.524.291.194-2.524.776-7.668 1.844-17.665 5.242-50.57.291-2.524-1.941-.194-24.751-3.009-3.786-.485 2.427-18.927.194-1.262-2.815-.388z"/>
          </a>

          {/* Dots (Markers) */}
          {locations.map((loc) => (
            <g key={loc.id} onClick={() => setSelectedLocation(loc)} style={{ cursor: "pointer" }}>
              {/* Circle for the dot */}
              <circle cx={loc.x} cy={loc.y} r="5" className="map-marker" fill={selectedLocation.id === loc.id ? "#990000" : "#FFCC00"} />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default Map;