import React, { useState, useEffect } from "react";
import "../index";
import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { NotMatchFound } from "../constant";
import { IMG_CDN_URL } from "../constant";
import { SWIGGY_API_URL } from "../constant";
import { Link } from "react-router-dom";

function filterData(searchText, allRestaurants) {
  const filterData = allRestaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    console.log(allRestaurants);
  }, [allRestaurants]);

  async function getRestaurants() {
    const response = await fetch(SWIGGY_API_URL);
    const jsonData = await response.json();

    function checkJsonData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards?.length; i++) {
        // initialize checkData for Swiggy Restaurant data using optional chaining
        let checkData =
          jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        // if checkData is not undefined then return it
        if (checkData !== undefined) return checkData;
      }
    }

    const resData = checkJsonData(jsonData);
    //console.log(json);

    setAllRestaurants(resData);
    setFilteredRestaurants(resData);
  }

  useEffect(() => {
    // API Call
    getRestaurants();
  }, []);

  //Not render -> Early Return
  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            //filter the searchText from restaurantList
            const data = filterData(searchText, allRestaurants);
            //now show the filtered data
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {allRestaurants.length === 0 ? (
          <Shimmer />
        ) : filteredRestaurants.length === 0 ? (
          <NotMatchFound />
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurantmenu/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
                style={{textDecoration:"none", color:"black"}}
              >
                <RestaurantCard {...restaurant?.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
