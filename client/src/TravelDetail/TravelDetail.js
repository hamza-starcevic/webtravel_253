import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TravelService from "../services/travelService";
import "./TravelDetail.css";

const TravelDetail = () => {
  const { id } = useParams();
  const [travel, setTravel] = useState(null);

  useEffect(() => {
    TravelService.getTravel(id)
      .then((response) => {
        setTravel(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!travel) return <div>Loading...</div>;

  return (
    <div className="travel-detail">
      <h2>{travel.title}</h2>
      <p>{travel.description}</p>
      <p><strong>Category:</strong> {travel.category}</p>
      <p><strong>Date:</strong> {new Date(travel.date).toLocaleDateString()}</p>
      <p><strong>Price:</strong> ${travel.price}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default TravelDetail;
