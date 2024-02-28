/* eslint-disable react/prop-types */
const OverviewPanel = ({ value, title }) => {
  return (
    <div className="m-2 font-semibold rounded-md w-1/3 xl:w-1/5 p-4 text-center">
      <h2 className=" text-xl text-neutral-500">{value}</h2>
      <span className="text-sm text-neutral-400">{title}</span>
    </div>
  );
};

const Rating = ({ title, value }) => {
  const barColor = title == "Cancel Rate" ? "bg-yellow-500" : "bg-red-500";
  return (
    <div className="w-full p-4">
      <h1 className="text-lg font-semibold text-neutral-600">{title}</h1>
      <div className="flex flex-row">
        <div className={`w-full h-8 bg-opacity-40 rounded-sm ${barColor}`}>
          <div className={`w-1/4 h-8 rounded-sm ${barColor}`}></div>
        </div>
        <h2 className="text-xl font-bold text-neutral-600 pl-4">{value}%</h2>
      </div>
    </div>
  );
};

const OrderSummary = () => {
  return (
    <div className="rounded-lg shadow-md m-6 w-full lg:w-1/2 h-[28rem] bg-white-color">
      <div className="flex flex-row justify-between items-center p-4">
        <h1 className="font-bold text-lg text-neutral-700">Order Summary</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full flex flex-row justify-center items-center flex-wrap">
          <OverviewPanel value={1243} title={"Total Orders"} />
          <OverviewPanel value={1243} title={"Processing"} />
          <OverviewPanel value={1243} title={"Canceled"} />
          <OverviewPanel value={1243} title={"Returned"} />
        </div>
        <div className="w-full h-16">
          <Rating title={"Cancel Rate"} value={25} />
          <Rating title={"Return Rate"} value={25} />
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
