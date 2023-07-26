import React, {useState} from "react";
import "../index";
import { restaurantList } from "../constant";
import { IMG_URL } from "../constant";


function filterData(searchText, restaurantList){

  const filterData=restaurantList.filter((restaurant)=>
     restaurant.data.name.includes(searchText)
  );
 
    return filterData;
}
  
const RestaurantCard = ({ cloudinaryImageId,name,cuisines,area,lastMileTravelString,costForTwo,avgRating})=>{
  
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
      <h4>{area}</h4>
      <span>
          <h4><i className="fa-solid fa-star">{avgRating}</i></h4>
          <h4>{lastMileTravelString}</h4>
          <h4>Rs {costForTwo/200}/-</h4>
      </span>
    </div>
    )
}


const Body = () =>{
 const [searchText,setSearchText] =useState("");
 const [restaurants,setRestaurants] =useState(restaurantList);

    return(
      <>
      <div className="search-container">

        <input type="text" placeholder="Search" value={searchText}
        onChange={(e)=>setSearchText(e.target.value)}
        />

        <button className="search-btn"
        onClick={()=>{
          //filter the searchText from restaurantList
          const data=filterData(searchText,restaurantList);
          //now show the filtered data
          setRestaurants(data);
        }}>Search</button>
       

      </div>


     <div className="restaurant-list">
     {
       restaurants.map((restaurant)=>{
        return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
       })
     }
     </div>
      </>
     
    )
     
}

export default Body;