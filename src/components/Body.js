import React, {useState, useEffect} from "react";
import "../index";
import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { NotMatchFound } from "../constant";



function filterData(searchText, allRestaurants){

  const filterData=allRestaurants.filter((restaurant)=>
     restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
 
    return filterData;
}
  

const Body = () =>{
 const [searchText,setSearchText] =useState("");
 const [filteredRestaurants,setFilteredRestaurants]=useState([]);
 const [allRestaurants,setAllRestaurants]=useState([]);

 
 useEffect(()=>{
 // API Call
 getRestaurants();
 },[]);

 async function getRestaurants() {
 const data=await fetch( "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");

 const json = await data.json();
    //console.log(json);

    // Optional Chaining
  setAllRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

 }
 

    //Not render -> Early Return
    if(!allRestaurants)return null;

    // if (filteredRestaurants?.length === 0)return <h1>No restaurant matches your search !!!</h1>;


    return allRestaurants?.length === 0 ? (<Shimmer/> ):
    (
      <>
      <div className="search-container">

        <input type="text" placeholder="Search" value={searchText}
        onChange={(e)=>{setSearchText(e.target.value);}}
        />

        <button className="search-btn"
        onClick={()=>{
          //filter the searchText from restaurantList
          const data=filterData(searchText,allRestaurants);
          //now show the filtered data
          setFilteredRestaurants(data);
        }}>Search</button>
       
      </div>


     <div className="restaurant-list">
     {
       allRestaurants.length ===0  ? (<Shimmer/>): filteredRestaurants.length === 0 ? (<NotMatchFound/>):

       (filteredRestaurants.map((restaurant)=>{
        return (<RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />);
       }))
       
     }
     </div>
      </>
     
    )
     
}

export default Body;