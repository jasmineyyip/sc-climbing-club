import React, { useEffect, useState } from "react";
import { db } from "../firebase"; // Ensure correct Firebase import
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

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
    <div style={{ padding: "20px" }}>
      <h2>Trips</h2>
      {trips.map((trip) => (
        <div key={trip.id} style={{ borderBottom: "1px solid #ddd", paddingBottom: "10px", marginBottom: "20px" }}>
          <h3>{trip.tripName}</h3>
          <p><strong>Location:</strong> {trip.location}</p>
          <p><strong>Type:</strong> {trip.tripType}</p>
          <p><strong>Dates:</strong> {trip.startDate.toDate().toDateString()} - {trip.endDate.toDate().toDateString()}</p>
          <p><strong>Climb Types:</strong> {trip.climbTypes.join(", ")}</p>
          <h4>Trip Leads:</h4>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {trip.tripLeadsDetails.map((lead) => (
              <div key={lead.id} style={{ textAlign: "center" }}>
                <img src={lead.headshot} alt={lead.name} style={{ width: "60px", height: "60px", borderRadius: "50%" }} />
                <p>{lead.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TripsPage;