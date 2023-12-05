
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
  const handleClick = () => {
    setShowIndex();
  }
  console.log('data',data)
  return (
    <div className="w-6/12 mx-auto my-3 bg-gray-200 shadow-lg p-4 " onClick={handleClick}>
      <div
        className="flex justify-between cursor-pointer"
        
      >
        <h3 className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </h3>
        <span>⬇️</span>
      </div>
      {showItems && <ItemList props={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
