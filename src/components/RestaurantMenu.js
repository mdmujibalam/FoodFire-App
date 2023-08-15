import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constant";
import Shimmer from "./Shimmer";
import { MENU_API_URL } from "../constant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant]= useState(null);

  useEffect(() => {
    //API Call
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const response = await fetch( MENU_API_URL + resId );

    const jsonData= await response.json();

    //console.log(json);
    function checkJsonData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards?.length; i++) {
    
        // initialize checkData for Swiggy Restaurant data using optional chaining
        let checkData = jsonData?.data?.cards[i]?.card?.card?.info;
    
        // if checkData is not undefined then return it
        if (checkData !== undefined) return checkData;
        
      }
    }
    
     const resData =checkJsonData(jsonData);
        //console.log(json);
    
      setRestaurant(resData);
      
  }

  return !restaurant ? (
    <Shimmer />
  ) :
   (
    <div className="menu">
      <img
          className="restaurant-img"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
      <h2>{restaurant?.name}</h2>
      <h2>{restaurant?.city}</h2>
      <p >{restaurant?.cuisines?.join(", ")}</p>
         
    </div>
  );
};

export default RestaurantMenu;
