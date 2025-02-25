import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import "./tripsPage.css";

const TripsPage = () => {
  const [trips, setTrips] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState([]); // Stores selected filter tags
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const tripsRef = collection(db, "trips");
        const tripsSnapshot = await getDocs(tripsRef);
        let tripsData = [];

        for (const tripDoc of tripsSnapshot.docs) {
          const trip = { id: tripDoc.id, ...tripDoc.data() };

          // ✅ Convert Firestore Timestamps to JS Date Strings
          trip.startDate = trip.startDate?.toDate().toLocaleDateString("en-US");
          trip.endDate = trip.endDate?.toDate().toLocaleDateString("en-US");

          // Ensure trip title, tripType, and climbTypes are safe values
          trip.title = trip.title?.toString() || "";
          trip.tripType = trip.tripType?.toString() || "";
          trip.climbTypes = Array.isArray(trip.climbTypes) ? trip.climbTypes : [];

          tripsData.push(trip);
        }

        // 🔽 Sort trips from most recent to least recent
        tripsData.sort((a, b) => new Date(b.endDate) - new Date(a.endDate));

        setTrips(tripsData);
        setFilteredTrips(tripsData);
      } catch (error) {
        console.error("Error fetching trips:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  // 🔍 Filter trips based on searchTerm and selectedTags
  useEffect(() => {
    let filtered = trips;

    // Apply search filter
    if (searchTerm) {
      const keyword = searchTerm.toLowerCase();
      filtered = filtered.filter((trip) =>
        trip.title.toLowerCase().includes(keyword)
      );
    }

    // Apply tag filter (tripType or climbTypes must match)
    if (selectedTags.length > 0) {
      filtered = filtered.filter((trip) =>
        selectedTags.some(
          (tag) => trip.tripType.toLowerCase() === tag.toLowerCase() ||
                   trip.climbTypes.some((climb) => climb.toLowerCase() === tag.toLowerCase())
        )
      );
    }

    setFilteredTrips(filtered);
  }, [searchTerm, selectedTags, trips]);

  // 🏷 Handle tag selection/deselection
  const toggleTag = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
  };

  // 🎛 Available filter options
  const filterTags = ["Beginner", "Queer", "Top Rope", "Bouldering"];

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="trips-container">
      <Header />
      <div className="banner">
        <div className="banner-text">
          <h1>Trips</h1>
        </div>
      </div>

      {/* 🔍 Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search trips..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>

      {/* 🎛 Advanced Filter */}
      <div className="filter-container">
          <div className="filter-row">
            <FontAwesomeIcon icon={faFilter} className="filter-icon"/> 
            <p>Advanced Filter</p>
          </div>
          <div className="filter-tags">
            {filterTags.map((tag) => (
              <span
                key={tag}
                className={`filter-tag ${selectedTags.includes(tag) ? "selected" : ""}`}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </span>
            ))}
          </div>
      </div>

      {/* Display filtered trips */}
      <div className="trips-list">
        {filteredTrips.length > 0 ? (
          filteredTrips.map((trip) => <Trip key={trip.id} trip={trip} />)
        ) : (
          <p className="no-results">No trips found.</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default TripsPage;