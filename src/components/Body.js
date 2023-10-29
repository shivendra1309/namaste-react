import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restroList, setRestroList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("typing");

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    console.log(data);
    setRestroList(
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredResList(
      data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(restroList);
  };

  onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        looks like you are offline!! Please check your internet connection!
      </h1>
    );
  //const restroList = resObj;
  if (filteredResList.length === 0) {
    return <Shimmer />;
  }

  
  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          name="search-box"
          id="search-box"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            console.log("search clicked with word = ", searchText);
            filteredResObj = restroList.filter((restaurant) => {
              return restaurant?.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilteredResList(filteredResObj);
          }}
        >
          Search
        </button>
      </div>
      <div className="top-rated">
        <button
          className="top-rated-btn"
          onClick={() => {
            filteredResObj = restroList.filter((restaurant) => {
              return restaurant?.info.avgRating > 4;
            });
            setFilteredResList(filteredResObj);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restro-container">
        {filteredResList.map((restaurant) => {
          return (
            <Link
              to={"/restaurants/" + restaurant?.info.id}
              key={restaurant?.info.id}
            >
              <RestaurantCard resData={restaurant} />{" "}
            </Link>
          );
        })}
        ;
      </div>
    </div>
  );
};

export default Body;
