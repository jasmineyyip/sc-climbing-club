// AdminAddTripPage.jsx
import React, { useState } from 'react';
import { db, storage } from '../firebase'; // adjust paths
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const AdminAddTripPage = () => {
  const [trip, setTrip] = useState({
    tripName: '',
    location: '',
    description: '',
    startDate: '',
    endDate: '',
    coverPicture: null,
    showOnMap: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'file') {
      setTrip({ ...trip, coverPicture: files[0] });
    } else if (type === 'checkbox') {
      setTrip({ ...trip, [name]: checked });
    } else {
      setTrip({ ...trip, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let imageURL = '';
      if (trip.coverPicture) {
        const imageRef = ref(storage, `trip-images/${trip.coverPicture.name}`);
        await uploadBytes(imageRef, trip.coverPicture);
        imageURL = await getDownloadURL(imageRef);
      }

      await addDoc(collection(db, 'trips'), {
        tripName: trip.tripName,
        location: trip.location,
        description: trip.description,
        startDate: trip.startDate,
        endDate: trip.endDate,
        coverPicture: imageURL,
        showOnMap: trip.showOnMap,
      });

      alert('Trip added successfully!');
      setTrip({ tripName: '', location: '', description: '', startDate: '', endDate: '', coverPicture: null, showOnMap: false });
    } catch (err) {
      console.error(err);
      alert('Error adding trip.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="trip-form">
      <input name="tripName" placeholder="Trip Name" value={trip.tripName} onChange={handleChange} required />
      <input name="location" placeholder="Location" value={trip.location} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={trip.description} onChange={handleChange} required />
      <input type="date" name="startDate" value={trip.startDate} onChange={handleChange} required />
      <input type="date" name="endDate" value={trip.endDate} onChange={handleChange} required />
      <input type="file" name="coverPicture" accept="image/*" onChange={handleChange} />
      <label>
        <input type="checkbox" name="showOnMap" checked={trip.showOnMap} onChange={handleChange} />
        Show on map?
      </label>
      <button type="submit">Add Trip</button>
    </form>
  );
};

export default AdminAddTripPage;