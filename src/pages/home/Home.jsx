import OrderSummary from "../../component/dashboard/OrderSummary";
import Purchase from "../../component/dashboard/Purchase";
import SummaryCard from "../../component/dashboard/SummaryCard";

import { BiFoodMenu } from "react-icons/bi";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center"> 
      <div className="w-full flex justify-center items-center flex-wrap">
        <SummaryCard
          icon={<BiFoodMenu />}
          value={123}
          description={"Total Menus"}
        />
        <SummaryCard
          icon={<BiFoodMenu />}
          value={123}
          description={"Total Menus"}
        />
        <SummaryCard
          icon={<BiFoodMenu />}
          value={123}
          description={"Total Menus"}
        />
      </div>
      <div className="w-full p-6 flex flex-col lg:flex-row justify-center items-center">
        <Purchase />
        <OrderSummary />
      </div>
    </div>
  );
};

export default Home;
