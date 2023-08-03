
import React, { useState } from "react"
import "../index"
import { IMG_URL } from "../constant";

const RestaurantCard = ({ cloudinaryImageId,name,cuisines,areaName,avgRating})=>{
  
    return(
      <div className="card">
      <img
        src={
          IMG_URL
           +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
      <span>
          <h4><i className="fa-solid fa-star">{avgRating}</i></h4>
          
      </span>
    </div>
    );
};

export default RestaurantCard;