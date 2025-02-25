import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // Ensure correct Firebase import
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Trip from "../components/Trip"; // Import the Trip component
import './tripsPage.css';

const TripsPage = () => {
  const [trips, setTrips] = useState([]);
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

          // Fetch trip leads' details
          const tripLeadsDetails = await Promise.all(
            trip.tripLeads.map(async (leadId) => {
              const leadRef = doc(db, "tripLeads", leadId);
              const leadSnap = await getDoc(leadRef);
              return leadSnap.exists() ? { id: leadId, ...leadSnap.data() } : null;
            })
          );

          trip.tripLeadsDetails = tripLeadsDetails.filter((lead) => lead !== null);
          tripsData.push(trip);
        }

        setTrips(tripsData);
      } catch (error) {
        console.error("Error fetching trips:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

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
      
      <div className="trips-list">
        {trips.map((trip) => (
          <Trip key={trip.id} trip={trip} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default TripsPage;