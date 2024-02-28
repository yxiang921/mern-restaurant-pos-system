// eslint-disable-next-line react/prop-types
const SummaryCard = ({icon, value, description}) => {
  return (
    <div className="rounded-lg m-6 w-1/2 h-40 bg-white-color flex flex-col justify-center items-center lg:w-1/4 lg:flex-row">
      <div className="bg-orange-color bg-opacity-20 rounded-full text-orange-color text-2xl font-semibold w-16 h-16 flex justify-center items-center">
        {icon}
      </div>
      <div className="font-semibold text-center lg:text-left lg:pl-4">
        <div className="text-neutral-800 text-lg">{value}</div>
        <div className="text-neutral-400">{description}</div>
      </div>
    </div>
  );
};

export default SummaryCard;
