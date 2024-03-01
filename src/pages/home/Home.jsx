import {
  SummaryCard,
  Purchase,
  OrderSummary,
  LiveOrder,
} from "../../component/";

import { BiFoodMenu } from "react-icons/bi";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start overflow-auto scrollbar-hide">
      <div className="w-full px-8 py-6 flex justify-between items-center flex-wrap">
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
      <div className="w-full p-6">
        <LiveOrder />
      </div>
    </div>
  );
};

export default Home;
