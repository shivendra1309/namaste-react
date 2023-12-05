import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restroList, setRestroList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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

  const onlineStatus = useOnlineStatus();
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
    <div className="bg-gray-50">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-md"
            id="search-box"
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1  shadow-xl bg-green-200 m-4 rounded-md"
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
        <div className="p-4 m-8 ">
          <button
            className="px-2 py-1 bg-gray-200  shadow-xl rounded-md"
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
      </div>
      <div className="flex flex-wrap  mx-auto w-10/12 content-center">
        {filteredResList.map((restaurant) => {
          return (
            <Link
              to={"/restaurants/" + restaurant?.info.id}
              key={restaurant?.info.id}
            >
              {restaurant?.info.aggregatedDiscountInfoV3 ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          );
        })}
        ;
      </div>
    </div>
  );
};

export default Body;
