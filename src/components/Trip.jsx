import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Trip.css'; // Import CSS file
import placeholderImage from '../assets/trips/placeholder.png'

const Trip = ({ trip }) => {
  // Ensure climbTypes is an array and filter out empty/null values
  const climbTypes = Array.isArray(trip.climbTypes) ? trip.climbTypes.filter(tag => tag) : [];
  
  // Only include tripType if it's **not "None" or empty**
  const tripTags = [
    ...(trip.tripType && trip.tripType !== "None" ? [trip.tripType] : []),
    ...climbTypes
  ];

  const displayDate = trip.startDate === trip.endDate 
    ? trip.startDate 
    : `${trip.startDate} - ${trip.endDate}`;
  
  // Check if coverPicture exists and is a valid URL
  const isValidImage = trip.coverPicture && trip.coverPicture.length > 0;
  const coverImage = isValidImage ? trip.coverPicture : placeholderImage;

  return (
    <div className="trip-card">
      <img src={coverImage} alt="Trip Cover" className="trip-image" />

      {/* First Row: Location & Date */}
      <div className="trip-row first">
        <div className="trip-location">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
          <span>{trip.location}</span>
        </div>
        <span className="trip-date">{displayDate}</span>
      </div>

      {/* Second Row: Trip Name & Arrow */}
      <div className="trip-row second">
        <span className="trip-name">{trip.tripName}</span>
        {/* <a href="#" className="trip-arrow">
          <FontAwesomeIcon icon={faArrowRight} />
        </a> */}
      </div>

      {/* Description */}
      <p className="trip-description">{trip.description}</p>

      {/* Tags (Only display if there are valid tags) */}
      {tripTags.length > 0 && (
        <div className="trip-tags">
          {tripTags.map((tag, index) => (
            <span key={index} className="trip-tag">{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Trip;