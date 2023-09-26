import { RES_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    return (
      <div className="res-card" >
        <div className="res-card-img">
        <img className="res-card-img1" src={RES_CDN_URL+resData?.info.cloudinaryImageId} alt="broken" />
        </div>
        {console.log("resData = ", resData?.info.name)}
        <h3>{resData?.info.name}</h3>
        <h4>{resData?.info.cuisines.join(", ")}</h4>
        <h4>{resData?.info.avgRating} star</h4>
        <h4>{resData?.info.sla.deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;