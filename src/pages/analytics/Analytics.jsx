import ReactEcharts from "echarts-for-react";

const option = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 300, 150, 80, 70, 110, 130],
      type: "bar",
    },
  ],
};

const FoodList = () => {
  return (
    <div className="w-full h-28 flex flex-row items-center">
      <div className="w-28 h-28 flex justify-center items-center">
        <img src="/src/assets/images/burger.png" alt="food" />
      </div>
      <div className="h-full w-full flex flex-col justify-center items-start">
        <h1 className="text-neutral-700 font-bold text-lg">
          Medium Spicy Spagethi Italiano
        </h1>
        <span className="text-orange-color font-medium">Burger</span>
      </div>
      <div className="h-full w-2/6 flex flex-row items-center justify-center p-2">
        <h1 className="font-bold text-neutral-700 text-xl">RM19.00</h1>
      </div>
    </div>
  );
};

const Analytics = () => {
  return (
    <div className="w-full h-screen p-6 flex flex-row flex-wrap lg:flex-nowrap">
      <div className="w-full lg:w-1/2 h-[26rem] rounded-md bg-white shadow-md p-4">
        <div className="w-full h-12 flex flex-row justify-between items-center">
          <h1 className="text-lg font-bold text-neutral-700">
            Sales Statistic
          </h1>
          <select className="select select-bordered h-12">
            <option disabled>Who shot first?</option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
        <div className="mt-16">
          <ReactEcharts option={option} />
        </div>
      </div>

      <div className="w-full lg:w-1/2 h-[32rem] rounded-md bg-white shadow-md p-4 lg:ml-6 my-6 lg:my-0">
        <div className="w-full h-12 text-left">
          <h1 className="text-lg font-bold text-neutral-700">
            Most Selling Items
          </h1>
        </div>
        <div className="w-full h-5/6 overflow-x-auto shadow-inner scrollbar-hide">
          <FoodList />
          <FoodList />
          <FoodList />
          <FoodList />
          <FoodList />
          <FoodList />
          <FoodList />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
