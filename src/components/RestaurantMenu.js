import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant]= useState(null);

  useEffect(() => {
    //API Call
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const response = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=" +
        resId
    );

    const json= await response.json();

    console.log(json);

    setRestaurant(json.data);
  }

  return !restaurant ? (
    <Shimmer />
  ) :
   (
    <div className="menu">
     
    </div>
  );
};

export default RestaurantMenu;
