import Purchase from "../../component/dashboard/Purchase";
import SummaryCard from "../../component/dashboard/SummaryCard";

import { BiFoodMenu } from "react-icons/bi";

const Home = () => {
  return (
    <div className="w-full h-full bg-red-400 flex flex-col justify-center"> 
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
      <div className="w-full flex justify-center">
        <Purchase />
      </div>
    </div>
  );
};

export default Home;
