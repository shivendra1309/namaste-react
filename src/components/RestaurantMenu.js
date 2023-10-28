import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useFetchRestaurantMenu from "../utils/useFetchRestaurantMenu";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

const RestaurantMenu = () => {
  const {resId} = useParams();

  const resInfo = useFetchRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, areaName, avgRating, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const {title, itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h2>{areaName}</h2>
      <h2>{avgRating}</h2>
      <h2>{costForTwoMessage}</h2>
      <h2>{title}</h2>
{/*       
     <p>{resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards}</p> */}
      {/* <p>{menu?.itemCards}</p> */}
      {/* <div className="menu-container">
        {itemCards.map((menu) => {
          return (
            <Link
              to={"/restaurants/" + resId}
              key={restaurant?.info.id}
            >
              <RestaurantCard resData={restaurant} />{" "}
            </Link>
          );
        })}
        ;
      </div> */}
    </div>
  );
};

export default RestaurantMenu;
