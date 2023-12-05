import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useFetchRestaurantMenu from "../utils/useFetchRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import React, { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useFetchRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, areaName, avgRating, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { title, itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);
  return (
    <div className="text-center ">
      <h1 className="font-bold my-10 text-xl">{name}</h1>
      <h2 className="font-bold">{cuisines.join(", ")}</h2>
      <h2>{areaName}</h2>
      <h2>{avgRating}</h2>
      <h2>{costForTwoMessage}</h2>
      {categories.map((category, index) => (
        <RestaurantCategory key={category.card.card.title} data={category.card.card}
        showItems={index===showIndex?true:false}
        setShowIndex={()=>setShowIndex(index===showIndex?null:index)}/>
      ))}
      

    </div>
  );
};

export default RestaurantMenu;
