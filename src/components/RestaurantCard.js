import { RES_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="m-2 p-4 w-72 h-[28rem] border rounded-lg bg-gray-200  shadow-xl hover:bg-gray-300">
      <img
        className="w-full h-40 object-cover"
        src={RES_CDN_URL + resData?.info.cloudinaryImageId}
        alt="broken"
      />
      <h3 className="font-bold  py-2 text-xl">{resData?.info.name}</h3>
      <h4>{resData?.info.cuisines.join(", ")}</h4>
      <h4>⭐ {resData?.info.avgRating} star</h4>
      <h4>{resData?.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
 
  return(props) => {
    const {resData} = props;
    const {discountTag, header, subHeader} = resData?.info.aggregatedDiscountInfoV3;
    return(
      <div>
        <label className="absolute bg-black text-white m-2 p-3 rounded-ee-full bg-opacity-70 text-xl">{ header + " " +subHeader }</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
