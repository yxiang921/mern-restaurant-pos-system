import { FiShoppingBag } from "react-icons/fi";
import { CiMoneyCheck1 } from "react-icons/ci";


// eslint-disable-next-line react/prop-types
const PurchasePanel = ({icon, title, value}) => {
  return (
    <div className="flex flex-col">
      <div className="relative w-full h-20 flex flex-row justify-start items-center pl-4 mt-4">
        <div className="h-12 w-12 flex justify-center items-center rounded-full bg-orange-color bg-opacity-20 text-orange-color">
          {icon}
        </div>
        <div className="font-semibold text-left pl-6">
          <div className="text-neutral-800 text-lg">{title}</div>
          <div className="text-neutral-400">Increase by 10%</div>
        </div>
        <div className="absolute right-6 font-semibold text-xl">${value}</div>
      </div>
      {/* progress bar start */}
      <div>
        <div className="w-11/12 ml-4 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-orange-color h-2.5 rounded-full w-12"></div>
        </div>
      </div>
      {/* progres bar end */}
    </div>
  );
};

const Purchase = () => {

  return (
    <div className="rounded-lg shadow-md w-full lg:w-1/2 h-[28rem] bg-white-color">
      <div className="w-full flex flex-row justify-between items-center p-4">
        <h1 className="font-bold text-lg text-neutral-700">Purchases</h1>
        <select
          defaultValue={"month"}
          className="select select-xs select-bordered  h-12"
        >
          <option value={"week"}>This Week</option>
          <option value={"month"}>This Month</option>
          <option value={"year"}>This Year</option>
        </select>
      </div>
      <PurchasePanel icon={<FiShoppingBag />} title={"Orders"} value={4000}/>
      <PurchasePanel icon={<CiMoneyCheck1 />} title={"Voucher Usage"} value={896}/>
    </div>
  );
};

export default Purchase;
