import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Header from "../components/Header";
import Banner from '../components/Banner'
import Footer from "../components/Footer";
import tripsBanner from '../assets/banners/tripsbanner.jpg'
import Trip from "../components/Trip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import './TripsPage.css';

const TripsPage = () => {
  const location = useLocation();
  const [trips, setTrips] = useState([]);
  const [filteredTrips, setFilteredTrips] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState([]); // Stores selected filter tags 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (location.state?.searchQuery) {
      setSearchTerm(location.state.searchQuery);
    }
  }, [location.state]);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const tripsRef = collection(db, "trips");
        const tripsSnapshot = await getDocs(tripsRef);
        let tripsData = [];

        for (const tripDoc of tripsSnapshot.docs) {
          const trip = { id: tripDoc.id, ...tripDoc.data() };

          trip.startDate = trip.startDate?.toDate().toLocaleDateString("en-US");
          trip.endDate = trip.endDate?.toDate().toLocaleDateString("en-US");

          trip.tripName = trip.tripName?.toString() || "";
          trip.tripType = trip.tripType?.toString() || "";
          trip.climbTypes = Array.isArray(trip.climbTypes) ? trip.climbTypes : [];

          tripsData.push(trip);
        }

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

  // filter trips based on searchTerm and selectedTags
  useEffect(() => {
    let filtered = trips;

    // apply search filter
    if (searchTerm) {
      const keyword = searchTerm.toLowerCase();
      filtered = filtered.filter((trip) =>
        trip.tripName.toLowerCase().includes(keyword)
      );
    }

    // apply tag filter (tripType or climbTypes must match)
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

  // handle tag selection/deselection
  const toggleTag = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
  };

  // available filter options
  const filterTags = ["Beginner", "Queer", "BIPOC", "Top Rope", "Bouldering", "Lead"];

  if (loading) {
    return <p></p>;
  }

  return (
    <>
      <Header />
      <Banner image={tripsBanner} text="Trips" />
      <div className="trips-container">
        {/* Trips Intro */}
        <div className="section trips-intro">
          <h1 className="subheading">Join Our Trips</h1>
          <p className="body">
            Our weekend trips occur all around California, Nevada, Utah, and Arizona! We provide all the gear (though your gear is always appreciated!), and teach you all of the important safety and climbing tips.
          </p>
          <p className="body">
            To accommodate for the high demand of trips, priority is given to students who have not attended a trip before and/or students who have a vehicle and are willing to be a driver for the trip - you will be reimbursed for gas. For the rest of our members, spots for trips are chosen in a general lottery system.
          </p>
          <p className="body">
            We ask that you please keep up with school work and check with any scheduling conflicts before signing up for a trip, as those who cancel last minute or do not show up will be given lower priority for future SC Climbing trips.
          </p>
        </div>

        <div className="section past-trips">
          <h1 className="subheading">Past Trips</h1>
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
              <FontAwesomeIcon icon={faFilter} className="filter-icon" />
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
        </div>

        <Footer />
      </div>
    </>
  );
};

export default TripsPage;