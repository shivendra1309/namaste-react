import { RES_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="m-2 p-4 w-[250px] bg-gray-200  shadow-xl">
      <img
        className=""
        src={RES_CDN_URL + resData?.info.cloudinaryImageId}
        alt="broken"
      />
      <h3 className="font-bold py-2 text-lg">{resData?.info.name}</h3>
      <h4>{resData?.info.cuisines.join(", ")}</h4>
      <h4>{resData?.info.avgRating} star</h4>
      <h4>{resData?.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
