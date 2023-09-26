import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

 const Body = () => {
    const [restroList, setRestroList] = useState(resObj);

//const restroList = resObj;

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          name="search-box"
          id="search-box"
          placeholder="search"
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="top-rated">
        <button
          className="top-rated-btn"
          onClick={() => {
            filteredResObj = resObj.filter((restaurant) => {
              return restaurant?.info.avgRating > 4;
            });
            setRestroList(filteredResObj);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restro-container">
        {restroList.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant?.info.id} resData={restaurant} />
          );
        })}
        ;
      </div>
    </div>
  );
};

export default Body;
