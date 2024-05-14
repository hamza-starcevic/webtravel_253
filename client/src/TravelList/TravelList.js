import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TravelService from "../services/travelService";
import "./TravelList.css";

const TravelList = () => {
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    TravelService.getTravels()
      .then((response) => {
        setTravels(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="travel-list">
      <h2>Travel Offers</h2>
      <ul>
        {travels.map((travel) => (
          <li key={travel._id}>
            <Link to={`/travels/${travel._id}`}>
              {travel.title} - {travel.category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelList;
