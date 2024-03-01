import { FaPlus, FaMinus } from "react-icons/fa6";

const CategoryCard = () => {
  return (
    <div className="btn border-none w-80 h-48 m-4 rounded-md bg-sky-500 text-base-300 flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl">Burger</h1>
      <span className="font-medium text-md text-neutral-200 text-opacity-65">
        3 Items
      </span>
    </div>
  );
};

const FoodCard = () => {
  return (
    <div className="border-none w-80 h-48 m-4 p-4 rounded-md bg-sky-500 text-base-300 flex flex-row justify-between items-center">
      <div className="w-7/12 h-full text-left flex flex-col justify-between">
        <img src="/src/assets/images/burger.png" alt="Food Picture" />
        <h1 className="font-bold text-lg">Burger Name One</h1>
        <span className="font-medium text-md text-neutral-200 text-opacity-65">
          RM 9.00
        </span>
      </div>
      <div className="w-4/12 h-full flex flex-col justify-between items-center text-neutral-700">
        <div className="bg-neutral-300  cursor-pointer w-8 h-8 min-h-8 flex justify-center items-center rounded-sm mt-4">
          <FaPlus />
        </div>
        <div className="font-bold text-lg text-neutral-200">0</div>
        <div className="bg-neutral-300  cursor-pointer w-8 h-8 min-h-8 flex justify-center items-center rounded-sm mb-4">
          <FaMinus />
        </div>
      </div>
    </div>
  );
};

const NewOrder = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center p-6">
      {/* Category Option */}
      <div className="w-full h-full flex justify-start items-start flex-wrap">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>

      {/* Show Each Food */}
      <div className="w-full h-ful flex justify-start items-start flex-wrap">
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>
    </div>
  );
};

export default NewOrder;
