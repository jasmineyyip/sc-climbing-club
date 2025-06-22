import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import mapImage from '../assets/us-map.png';
import placeholderImage from '../assets/trips/placeholder.png'
import "./Map.css";

const Map = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const tripsRef = collection(db, "trips");
        const q = query(tripsRef, where("showOnMap", "==", true));
        const snapshot = await getDocs(q);
  
        const data = snapshot.docs.map(doc => {
          const d = doc.data();
          return {
            id: doc.id,
            name: d.tripName,
            place: d.location,
            description: d.description,
            imageURL: d.coverPicture || placeholderImage,
            nickname: d.nickName,
            x: d.x,
            y: d.y,
          };
        });
  
        console.log("Fetched trips for map:", data); // ✅ DEBUG
        setLocations(data);
        if (data.length > 0) setSelectedLocation(data[0]);
      } catch (err) {
        console.error("Error fetching map locations:", err);
      }
    };
  
    fetchLocations();
  }, []);
  
  const handleNavigate = () => {
    navigate("/trips", { state: { searchQuery: selectedLocation.nickname } });
  };

  if (!selectedLocation) return null; // or loading spinner

  return (
    <div className="map-container">
      <div className="details-box">
        <img src={selectedLocation.imageURL} alt={selectedLocation.name} className="location-image" />
        <div className="location-info">
          <div className="location-header">
            <span className="location-name">{selectedLocation.name}</span>
            <span className="location-place">{selectedLocation.place}</span>
          </div>
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
    </div>
  );
};

export default Map;