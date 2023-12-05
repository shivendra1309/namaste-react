import { RES_CDN_URL } from "../utils/constants";

const ItemList = (data) => {
  console.log(data);
  return (
    <div>
      {data.props.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-400 border-b-2 flex justify-between"
        >
          <div className="w-9/12 text-left">
            <div my-4 py-4>
              <span>{item.card.info.name}</span>
              <span> - ₹ {item.card.info.price / 100}</span>
            </div>
            <p className="text-xs my-12">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4 ">
            <div className="absolute">
              <button className="p-2 mx-16 rounded-lg bg-white shadow-lg  m-auto ">
                Add +
              </button>
              </div>
              <img
                src={RES_CDN_URL + item.card.info.imageId}
                className="w-full"
              />
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
