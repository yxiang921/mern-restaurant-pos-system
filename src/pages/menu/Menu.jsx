import { MdOutlineEdit } from "react-icons/md";

const FoodCard = ({ imagePath, name, price}) => {
  return (
    <div className="w-52 h-52 bg-white rounded-lg shadow-lg m-4 flex flex-col justify-center items-center relative">
      <div className="rounded-full w-24 h-24 bg-base-200"></div>
      <h1 className="text-lg font-bold text-neutral-600 pt-2">{name}</h1>
      <span className="font-medium text-neutral-400">RM{price}</span>

      <div className="w-8 h-8 bg-base-300 rounded-full absolute top-4 right-4 cursor-pointer flex justify-center items-center">
        <MdOutlineEdit />
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center p-6">
      <div className="rounded-lg w-full overflow-x-auto">
        <div className="w-full h-12 flex flex-row justify-between items-center ">
          <h1 className="text-lg font-bold text-neutral-700">Current Menu</h1>
          <button className="btn bg-orange-color text-white">Add New</button>
        </div>
      </div>
      <div className="w-full h-[35rem] mt-6 flex flex-row justify-start items-start flex-wrap">
        {/* each food card (start) */}
        <FoodCard name={"Chicken Sandwich"} price={9.00}/>
        <FoodCard name={"Chicken Sandwich"} price={9.00}/>
        <FoodCard name={"Chicken Sandwich"} price={9.00}/>
        <FoodCard name={"Chicken Sandwich"} price={9.00}/>
        <FoodCard name={"Chicken Sandwich"} price={9.00}/>
        {/* each food card (end) */}
      </div>
    </div>
  );
};

export default Menu;
